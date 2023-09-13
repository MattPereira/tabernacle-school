const postmark = require("postmark");

const client = new postmark.ServerClient(
  process.env.POSTMARK_TOKEN_ADMISSIONS_FORM
);

const validator = require("validator");

// endpoint is "/api/send-admissions-email"
export default async function handler(request, response) {
  if (request.method === "POST") {
    const { name, email, message: userMessage } = request.body;

    // req.body validations
    if (
      !name ||
      !validator.isLength(name, { min: 1, max: 70 }) ||
      validator.isEmpty(name)
    ) {
      return response
        .status(400)
        .json({ message: "Name must be less than 70 characters" });
    }

    if (!email || !validator.isEmail(email)) {
      return response.status(400).json({ message: "Invalid email address" });
    }

    if (
      !userMessage ||
      !validator.isLength(userMessage, { min: 1, max: 1000 }) ||
      validator.isEmpty(userMessage)
    ) {
      return response
        .status(400)
        .json({ message: "Message must be less than 1000 characters" });
    }

    try {
      await client.sendEmail({
        From: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_ADDRESS,
        Subject: "Schedule Tour Request from tabernacle.school",
        HtmlBody: `
        <h3>Name </h3>
        <p>${name}</p>
        <h3>Email </h3>
        <p>${email}</p>
        <h3>Subject</h3>
        <p>Scheduling a tour of tabernacle campus</p>
        <h3>Message</h3>
        <p>${userMessage}</p>
        `,
      });

      return response.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      return response
        .status(500)
        .json({ error: "Server error email not sent" });
    }
  } else {
    return response.status(405).json({ message: "Method Not Allowed!!!" });
  }
}
