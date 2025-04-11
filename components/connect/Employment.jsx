import { SectionTitle, SectionWrapper } from "@/components/common";

export default function Employment() {
  return (
    <SectionWrapper classNames="bg-alternate">
      <SectionTitle title="Employment" />
      <div className="mb-5">
        <p className="text-xl">
          We are hiring! Tabernacle School is hiring for the 2025-2026 school
          year. Our teachers and staff help students acquire the skills and
          attitudes necessary to be Faithful Followers of Jesus Christ,
          Life-Long Learners, Citizens of Character and Academic Achievers.
          Please contact Rebeca Shreve at{" "}
          <a className="underline text-primary" href="mailto:LesleyN@tbs.org">
            Rebecas@tbs.org
          </a>{" "}
          or call{" "}
          <a className="underline text-primary" href="tel:925-685-9169">
            925-685-9169
          </a>{" "}
          for more information. Applications may be picked up in the school's
          front office or downloaded{" "}
          <a
            className="link text-primary"
            href="/pdfs/employment-application.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
          >
            here
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="mb-5">
            <h5 className="font-bold text-2xl mb-3">Open Positions</h5>
            <ul className="list-disc list-inside">
              <li>Elementary Teacher</li>
              <li>Junior High Teacher</li>
              <li>Physical Education Teacher</li>
              <li>Support Staff</li>
            </ul>
          </div>

          <h5 className="font-bold text-2xl mb-3">Application Materials</h5>
          <ol className="list-disc list-inside">
            <li>
              Completed{" "}
              <a
                className="link text-primary"
                href="/pdfs/employment-application.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
              >
                employment application
              </a>
            </li>
            <li>Current Resume</li>
            <li>Copy of College Transcripts (For Faculty Positions)</li>
            <li>Three letters of reference</li>
          </ol>
        </div>
        <div>
          <div className="mb-10">
            <h5 className="font-bold text-2xl">Requirements</h5>
            <p className="text-xl">
              All applicants must hold a bachelor's degree from an accredited
              university and be able to sign the school Statement of Faith.
            </p>
          </div>

          <h5 className="font-bold text-2xl">Equal Opportunity Employer</h5>
          <p className="text-xl">
            Tabernacle School is an equal opportunity employer, dedicated to a
            policy of non-discrimination in employment on any basis including
            age, sex, color, race, creed, national origin, marital status,
            political belief or disability. Federal law prohibits the employment
            of unauthorized aliens. All persons hired must submit satisfactory
            proof of employment authorization and identity within three (3) days
            of being hired. Failure to submit such proof within the required
            time shall result in immediate employment termination.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
