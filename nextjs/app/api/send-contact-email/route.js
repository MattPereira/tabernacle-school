import { NextResponse } from "next/server";

const postmark = require("postmark");

const client = new postmark.ServerClient(
  process.env.POSTMARK_TOKEN_CONTACT_FORM
);

const { check, validationResult } = require("express-validator");

/**
 * endpoint is "/api/send-contact-email"
 *
 * @dev nextjs does weird thing where request.body not auto-parsed or resolved
 * so to satisfy the express-validator library, we need to manually format
 * the request.body to look like an express request object
 *
 * TODO: find a validator package that is more nextjs friendly
 */
export async function POST(request) {
  const requestBody = await request.json();
  const { name, email, message: userMessage } = requestBody;

  // Define requirements for each field in request.body
  const validations = [
    check("name").notEmpty().withMessage("Name is required"),
    check("name")
      .isLength({ max: 70 })
      .withMessage("Name must be less than 70 characters"),
    check("email").isEmail().withMessage("Invalid email address"),
    check("userMessage")
      .isLength({ max: 1000 })
      .withMessage("Message must be less than 1000 characters"),
  ];

  // manually construct object that looksl ike normal request.body to be compatible with express-validator package
  const formattedRequest = {
    body: requestBody,
  };

  // Run validations
  await Promise.all(
    validations.map((validation) => validation.run(formattedRequest))
  );

  // Check for errors
  const errors = validationResult(formattedRequest);
  if (!errors.isEmpty()) {
    return NextResponse.json({ error: errors.array()[0].msg }, { status: 400 });
  }

  // Send email
  try {
    await client.sendEmail({
      From: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS,
      Subject: "Connect message from tabernacle.school",
      HtmlBody: `
        <h3>Name</h3>
        <p>${name}</p>
        <h3>Email</h3>
        <p>${email}</p>
        <h3>Message</h3>
        <p>${userMessage}</p>
        `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Server error email not sent" },
      { status: 500 }
    );
  }
}
