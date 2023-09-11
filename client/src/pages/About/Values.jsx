import value1 from "../../assets/images/about/values/value1.jpg";
import value2 from "../../assets/images/about/values/value2.jpg";

import SectionTitle from "../../components/SectionTitle";
import SectionWrapper from "../../components/SectionWrapper";

const values = [
  {
    title: "Excellence Based",
    description: `Vitally engaged in producing life-long learners through teaching
    and modeling self-discipline. We identify each student’s unique
    God-given intelligence, through awards assemblies and instruction.
    We begin to outline the future and build their skills by
    introducing them to professions that match their abilities.`,
  },

  {
    title: "Evangelically Focused",
    description: `Passionate about knowing Jesus and making Him known. Inclusive in
    our outreach. We have families from every religion. Through our interview process,
    we explain that JESUS is the central figure of our school. He is a
    Person, not a religion. We explain very honestly that their
    children will be taught to believe in Jesus and to love Him.`,
  },
  {
    title: "Truth Centered",
    description: `Committed to an education that molds students’ hearts and minds for
     lasting impact. We believe in fostering an environment where truth serves as the 
     cornerstone, guiding students towards wisdom and purposeful living.`,
  },
  {
    title: "Relationally Engaged",
    description: `Dedicated to loving and nurturing students. Tabernacle School
    has a foundational character program which teacher morals and
    ethics. Every child knows that they will be a servant leader.
    `,
  },
];

export default function Values() {
  return (
    <SectionWrapper>
      <SectionTitle title="Values" />
      <div>
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {values.map((value) => (
            <div key={value.title}>
              <h5 className="text-2xl font-gothic font-bold mb-1 text-center">
                {value.title}
              </h5>
              <p className="text-xl">{value.description}</p>
            </div>
          ))}
        </div>
        <div className="hidden md:grid grid-cols-2 gap-6 ">
          <div>
            <img
              className="w-full rounded-2xl"
              src={value1}
              alt="children holding up thank you sign"
            />
          </div>
          <div>
            <img
              className="w-full rounded-2xl"
              src={value2}
              alt="children singing at christmas performance"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
