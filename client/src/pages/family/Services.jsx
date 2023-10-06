import ignitia from "../../assets/images/family/ignitia.png";
import choiceLunch from "../../assets/images/family/choice-lunch.png";
import facts from "../../assets/images/family/facts-logo.png";

import { SectionTitle, SectionWrapper } from "../../components";

const services = [
  {
    title: "Facts Management",
    description:
      "Facts provides tools and solutions to private K-12 schools that elevate the education experience for administrators, teachers, and families.",
    image: facts,
    url: "https://logins2.renweb.com/logins/ParentsWeb-Login.aspx",
  },
  {
    title: "Ignitia",
    description:
      "A versatile online Christian curriculum and learning management system with dynamic, Christ-centered lessons",
    image: ignitia,
    url: "https://tabernacleca.ignitiaschools.com/owsoo/login/auth",
  },
  {
    title: "ChoiceLunch",
    description:
      "Choicelunch individually packages your child’s lunch for safe delivery and easy distribution at school.",
    image: choiceLunch,
    url: "https://www.choicelunch.com/",
  },
];

export default function Services() {
  return (
    <SectionWrapper classNames="bg-alternate">
      <SectionTitle title="Services" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
        {services.map((resource, index) => (
          <div key={index}>
            <div className="bg-white rounded-2xl h-full">
              <div className="h-[150px] flex justify-center items-center p-10">
                <img src={resource.image} alt="" />
              </div>

              <div className="p-5">
                <div className="mb-5">
                  <a
                    className="text-primary underline text-xl font-bold"
                    href={resource.url}
                  >
                    {resource.title}
                  </a>
                </div>

                <p className="text-xl">{resource.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
