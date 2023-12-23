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
 * endpoint is POST request to "/api/admissions" path
 *
 */
export async function POST(request) {
  console.log(request.body);

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
  } = request.body;

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

  // Run validations
  await Promise.all(validations.map((validation) => validation.run(request)));

  console.log("Response", Response);
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return Response.error({ message: errors.array()[0].msg });
  }

  try {
    //   await client.sendEmail({
    //     From: process.env.EMAIL_ADDRESS,
    //     to: process.env.EMAIL_ADDRESS,
    //     Subject: "Schedule Tour Request from tabernacle.school",
    //     HtmlBody: `
    //       <h2>Student Information</h2>
    //       <h3>Name</h3>
    //       <p>${studentFirstName} ${studentLastName}</p>
    //       <h3>Grade Level</h3>
    //       <p>${gradeLevel}</p>
    //       <h3>Birthdate</h3>
    //       <p>${birthdate}</p>
    //       <h2>Parent Information </h2>
    //       <h3>Name</h3>
    //       <p>${parentFirstName} ${parentLastName}</p>
    //       <h3>Email </h3>
    //       <p>${email}</p>
    //       <h3>Phone Number</h3>
    //       <p>${phoneNumber}</p>
    //       <h3>Availability</h3>
    //       <p>${availability}</p>
    //       `,
    //   });

    return Response.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    return Response.status(500).json({
      message: "Server error: send failed",
    });
  }
}
