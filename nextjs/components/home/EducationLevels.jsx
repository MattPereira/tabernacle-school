import { SectionWrapper } from "../common";

const EducationLevelsContent = [
  {
    title: "Preschool",
    link: "/academics#Preschool",
    description:
      "The tiny tigers preschool provides a warm, nurturing, family atmosphere that is conducive to learning at an early age. Our program accepts children that are 3 years old by September 1st. We have been providing and promoting high quality early childhood education since 1971.",
  },
  {
    title: "Elementary",
    link: "/academics#Elementary",
    description:
      "Our elementary program provides an education that prepares children to think clearly, act responsibly, and live ethically. Our programs and curriculum give students a competitive edge in an increasingly complex society as they discover their unique giftedness.",
  },
  {
    title: "Middle School",
    link: "/academics#Middle",
    description:
      "During middle school, we help our students navigate the early teen years and prepare them to excel in high school and beyond. Throughout the middle school years, our students are challenged academically and grow in confidence as they explore their interests.",
  },
];

export function EducationLevels() {
  return (
    <SectionWrapper classNames="bg-[#355e3b] text-white">
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
        {EducationLevelsContent.map((group) => (
          <div key={group.title}>
            <h3 className="font-copse text-3xl md:text-4xl text-center mb-4">
              {group.title}
            </h3>
            <p className="text-xl font-gothic mb-6">{group.description}</p>
            <div className="text-center">
              {/* <HashLink
                  className="inline-block text-xl font-gothic text-white border border-white rounded-full px-8 py-2 hover:bg-white hover:text-black transition"
                  href={group.link}
                >
                  Learn More
                </HashLink> */}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
