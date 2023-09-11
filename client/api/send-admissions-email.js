const postmark = require("postmark");

const client = new postmark.ServerClient(
  process.env.POSTMARK_TOKEN_ADMISSIONS_FORM
);

const validator = require("validator");

// endpoint is "/api/send-admissions-email"
export default async function handler(request, response) {
  if (request.method === "POST") {
    const { name, email, message } = request.body;

    // Input validations
    if (
      !name ||
      !validator.isLength(name, { min: 1, max: 70 }) ||
      validator.isEmpty(name)
    ) {
      return response
        .status(400)
        .json({ error: "Name must be less than 70 characters" });
    }

    if (!email || !validator.isEmail(email)) {
      return response.status(400).json({ error: "Invalid email address" });
    }

    if (
      !message ||
      !validator.isLength(message, { min: 1, max: 1000 }) ||
      validator.isEmpty(message)
    ) {
      return response
        .status(400)
        .json({ error: "Message must be less than 1000 characters" });
    }

    try {
      // console.log("request.body", request.body);
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
        <p>${message}</p>
        `,
      });

      return response.status(200).json({ status: "Email sent successfully!" });
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Server error email not sent" });
    }
  } else {
    return response.status(405).json({ message: "Method Not Allowed!!!" });
  }
}
