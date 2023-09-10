const postmark = require("postmark");

const client = new postmark.ServerClient(
  import.meta.env.POSTMARK_TOKEN_CONTACT_FORM
);

const validator = require("validator");

// endpoint is /api/handleContactForm
export default async function handler(request, response) {
  if (request.method === "POST") {
    const { name, email, message, subject } = request.body;

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

    if (
      !subject ||
      !validator.isLength(subject, { min: 1, max: 100 }) ||
      validator.isEmpty(subject)
    ) {
      return response
        .status(400)
        .json({ error: "Subject must be less than 100 characters" });
    }

    try {
      // console.log("request.body", request.body);
      await client.sendEmail({
        From: import.meta.env.EMAIL_ADDRESS,
        to: import.meta.env.EMAIL_ADDRESS,
        Subject: "General Message from tabernacle.school",
        HtmlBody: `
        <h3>Name</h3>
        <p>${name}</p>
        <h3>Email</h3>
        <p>${email}</p>
        <h3>Subject</h3>
        <p>${subject}</p>
        <h3>Message</h3>
        <p>${message}</p>
        `,
      });

      return response.status(200).json({ status: "Email sent successfully" });
    } catch (error) {
      return response
        .status(500)
        .json({ error: "Server error email not sent" });
    }
  } else {
    return response.status(405).json({ error: "Method Not Allowed" });
  }
}
