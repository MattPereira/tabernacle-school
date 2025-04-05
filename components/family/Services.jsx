import { SectionTitle, SectionWrapper } from "@/components/common";
import Image from "next/image";

const services = [
  {
    title: "Facts Management",
    image: "/family/facts-logo.png",

    description:
      "Facts provides tools and solutions to private K-12 schools that elevate the education experience for administrators, teachers, and families.",
    url: "https://logins2.renweb.com/logins/ParentsWeb-Login.aspx",
  },
  {
    title: "Ignitia",
    description:
      "A versatile online Christian curriculum and learning management system with dynamic, Christ-centered lessons",
    image: "/family/ignitia.png",

    url: "https://tabernacleca.ignitiaschools.com/owsoo/login/auth",
  },
  {
    title: "ChoiceLunch",
    description:
      "Choicelunch individually packages your child’s lunch for safe delivery and easy distribution at school.",
    image: "/family/choice-lunch.png",

    url: "https://www.choicelunch.com/",
  },
];

export default function Services() {
  return (
    <SectionWrapper classNames="bg-alternate">
      <SectionTitle title="Services" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-10">
        {services.map((resource, index) => (
          <div key={index}>
            <div className="bg-white rounded-2xl h-full">
              <div className="h-[150px] flex justify-center items-center p-10">
                <Image width={1000} height={1000} src={resource.image} alt="" />
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
