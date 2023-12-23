import { NextResponse } from "next/server";

const postmark = require("postmark");

const client = new postmark.ServerClient(
  process.env.POSTMARK_TOKEN_ADMISSIONS_FORM
);

const { check, validationResult } = require("express-validator");

// Define reusable validation functions
const nameValidation = (name) => [
  check(name).notEmpty().withMessage(`${name} is required`),
  check(name)
    .isLength({ max: 50 })
    .withMessage(`${name} must be less than 50 characters`),
];

/**
 * endpoint is POST request to "/api/send-tour-email" path
 *
 */
export async function POST(request) {
  const requestBody = await request.json();
  const {
    studentFirstName,
    studentLastName,
    gradeLevel,
    birthdate,
    parentFirstName,
    parentLastName,
    email,
    phoneNumber,
    availability,
  } = requestBody;

  // Validation chains
  const validations = [
    ...nameValidation("studentFirstName"),
    ...nameValidation("studentLastName"),
    ...nameValidation("parentFirstName"),
    ...nameValidation("parentLastName"),
    check("email").isEmail().withMessage("Invalid email address"),
    check("availability")
      .isLength({ max: 1000 })
      .withMessage("Availability message must be less than 1000 characters"),
  ];

  // manually construct object that looks like normal request.body to be compatible with express-validator package
  const formattedRequest = {
    body: requestBody,
  };

  // Run validations
  await Promise.all(
    validations.map((validation) => validation.run(formattedRequest))
  );

  const errors = validationResult(formattedRequest);
  if (!errors.isEmpty()) {
    return NextResponse.json({ error: errors.array()[0].msg }, { status: 400 });
  }

  try {
    await client.sendEmail({
      From: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS,
      Subject: "Schedule Tour Request from tabernacle.school",
      HtmlBody: `
          <h2>Student Information</h2>
          <h3>Name</h3>
          <p>${studentFirstName} ${studentLastName}</p>
          <h3>Grade Level</h3>
          <p>${gradeLevel}</p>
          <h3>Birthdate</h3>
          <p>${birthdate}</p>
          <h2>Parent Information </h2>
          <h3>Name</h3>
          <p>${parentFirstName} ${parentLastName}</p>
          <h3>Email </h3>
          <p>${email}</p>
          <h3>Phone Number</h3>
          <p>${phoneNumber}</p>
          <h3>Availability</h3>
          <p>${availability}</p>
          `,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Server error: email not sent",
      },
      { status: 500 }
    );
  }
}
