import { SectionTitle, SectionWrapper } from "@/components/common";

export default function Employment() {
  return (
    <SectionWrapper classNames="bg-alternate">
      <SectionTitle title="Employment" />

      <div className="mb-10">
        <p className="text-xl">
          We are hiring! Tabernacle School is hiring substitute teachers and
          support staff for the 2023-2024 school year. All elementary and middle
          school teaching staff must hold a bachelor's degree from an accredited
          university and be able to sign the school Statement of Faith.
          Tabernacle School is an evangelical Christian school focused on
          providing an excellent Christ centered education in spiritual,
          academic and extracurricular subjects. Our teachers and staff help
          students acquire the skills and attitudes necessary to be Faithful
          Followers of Jesus Christ, Life-Long Learners, Citizens of Character
          and Academic Achievers.{" "}
        </p>
      </div>
      <div className="text-center mb-10">
        <a
          className="btn btn-primary capitalize text-xl"
          href="https://drive.google.com/file/d/155waZK-5Jq3IwcDit2wTdlNtBAxpqeKW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
        >
          Download Application
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="mb-5">
            <h5 className="font-bold text-2xl">Open Positions</h5>
            <p className="text-xl">
              All applicants must hold a bachelor's degree from an accredited
              university and be able to sign the school Statement of Faith.
              Please contact Lesley Nutting at{" "}
              <a
                className="underline text-primary"
                href="mailto:LesleyN@tbs.org"
              >
                LesleyN@tbs.org
              </a>{" "}
              or call{" "}
              <a className="underline text-primary" href="tel:925-685-9169">
                925-685-9169
              </a>{" "}
              for more information. Applications may also be picked up in the
              school's front office.
            </p>
          </div>

          <h5 className="font-bold text-2xl">Required Application Materials</h5>
          <ol className="list-disc list-inside">
            <li>Completed employment application.</li>
            <li>Current Resume</li>
            <li>Copy of College Transcripts (For Faculty Positions)</li>
            <li>Three letters of reference</li>
          </ol>
        </div>
        <div>
          <div className="mb-5">
            <h5 className="font-bold text-2xl">Spiritual Requirements</h5>
            <p className="text-xl">
              Must be a professing believer of Jesus Christ and attend a
              Christ-centered church.
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
