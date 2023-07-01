const postmark = require("postmark");

const client = new postmark.ServerClient(
  process.env.POSTMARK_TOKEN_ADMISSIONS_FORM
);

// endpoint is /api/handleAdmissionsForm
export default async function handler(request, response) {
  if (request.method === "POST") {
    const { name, email, message } = request.body;

    console.log("process.env", process.env);

    try {
      // console.log("request.body", request.body);
      await client.sendEmail({
        From: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_ADDRESS,
        Subject: "Schedule Tour Request from tabernacle.school",
        HtmlBody: `
        <h3>name: ${name} </h3>
        <h3>email: ${email} </h3>
        <h3>subject: Schedule a campus tour </h3>
        <h3>message:</h3>
        <p>${message}</p>
        `,
      });

      return response.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Server error email not sent" });
    }
  } else {
    return response.status(405).json({ message: "Method Not Allowed" });
  }
}
