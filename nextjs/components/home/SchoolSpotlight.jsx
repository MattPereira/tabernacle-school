import { SectionWrapper, HashLink } from "../common";

export const SchoolSpotlight = () => {
  return (
    <SectionWrapper classNames="bg-alternate">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20">
        <div>
          <h5 className="text-2xl md:text-3xl font-bold text-center mb-8">
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
          <h5 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Upcoming Events
          </h5>
          <p className="text-xl mb-5">
            Get ready for this year's annual Jog-a-thon! More information coming
            soon.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};
