const postmark = require("postmark");

const client = new postmark.ServerClient(
  process.env.POSTMARK_TOKEN_CONTACT_FORM
);

// endpoint is /api/handleContactForm
export default async function handler(request, response) {
  if (request.method === "POST") {
    const { name, email, message, subject } = request.body;

    try {
      // console.log("request.body", request.body);
      await client.sendEmail({
        From: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_ADDRESS,
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

      return response.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      return response
        .status(500)
        .json({ error: "Server error email not sent" });
    }
  } else {
    return response.status(405).json({ status: "Method Not Allowed" });
  }
}
