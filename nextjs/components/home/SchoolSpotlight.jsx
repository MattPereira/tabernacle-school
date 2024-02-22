import { SectionWrapper, HashLink } from "../common";

export const SchoolSpotlight = () => {
  return (
    <SectionWrapper classNames="bg-alternate">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
        <div>
          <h5 className="text-2xl font-bold text-center mb-5">
            Employment Opportunities
          </h5>
          <p className="text-xl mb-5">
            We are currently accepting applications for the following positions:
          </p>
          <ol className="list-disc list-inside text-xl mb-5">
            <li className="text-xl mb-5">TK-8th Art Teacher</li>
            <li className="text-xl">Preschool Teacher</li>
          </ol>
          <p className="text-xl">
            For more information about application requirements,{" "}
            <HashLink
              className="text-primary underline"
              href="/connect#Employment"
            >
              click here
            </HashLink>
            .
          </p>
        </div>
        <div>
          <h5 className="text-2xl font-bold text-center mb-5">
            Buildathon
          </h5>
          <div className="mb-3">
            <a target="_blank"
              rel="noopener noreferrer" className="text-xl text-primary underline" href="https://pledgestar.com/tabernacle/">PledgeStar</a>

          </div>
          <div className="mb-3">
            <a target="_blank"
              rel="noopener noreferrer" className="text-xl text-primary underline" href="https://www.signupgenius.com/go/10C094BAAAB2AA1F4C52-2023#/">Volunteer Signup</a>

          </div>
          <div className="mb-3">
            <a target="_blank"
              rel="noopener noreferrer" className="text-xl text-primary underline" href="https://www.signupgenius.com/go/10C094BAAAB2AA1F4C52-47302779-construction">Parent Lunch Order</a>
          </div>


        </div>
      </div>
    </SectionWrapper>
  );
};
