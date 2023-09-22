import { SectionTitle, SectionWrapper } from "../../components";

const ACCORDION_ITEMS = [
  {
    title: "What Is Common Core?",
    content:
      "Common Core Standards are a broad set of national standards established to shape and govern the general educational standards and assessments in public school. Currently, there are a handful of states who have opted not to align with the national standards.",
  },
  {
    title: "Private Schools & Common Core",
    content:
      "While public schools in California are mandated by our state leadership to adopt Common Core Standards, private schools are in a unique position to choose their alignment with the standards for their curriculum and institutions as a whole. In addition to new standards, Common Core also brings a new standardized test for students. However, private school students are not required to take these state tests.",
  },
  {
    title: "English",
    content:
      "In English (which the state refers to as English Language Arts), the Common Core refers to specific state standards of reading, writing, speaking, and listening whose mastery allows students to leave high school “ready in literacy.” Tabernacle School never set out to align ourselves with secular standards, but we find that the Common Core standards are already embedded in our courses. We strive to encourage students to think skillfully, critically, and intelligently.",
  },
  {
    title: "Mathematics",
    content:
      "The stated purpose of the Common Core State Standards Initiative is to detail and standardize what K-12 students from each state should know upon leaving each grade level. They are intended to achieve greater focus and coherence in the mathematics curriculum across the grade levels, leading to greater depth of application and understanding for individual students. Many would simply call this “good teaching,” and the Mathematics Department at Tabernacle is committed to a level of excellence that universally meets or exceeds the aforementioned standards.",
  },
];

export default function CommonCore() {
  return (
    <SectionWrapper>
      <SectionTitle title="Common Core" />

      <div className="mb-14">
        <p className="text-xl">
          As a school well-known for maintaining academic excellence, Tabernacle
          School reviews all educational standards, both state and national.
          More importantly, we are committed to providing a Christian education
          to those we serve by forming and awakening faith in Jesus Christ in
          our students.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div>
            <h5 className="text-center text-2xl font-bold mb-5">
              School Standards
            </h5>
          </div>
          <p className="text-xl">
            Many Common Core standards have been implemented at Tabernacle
            School. The Common Core calls for an increased emphasis on deeper
            understanding of underlying concepts in both the English Language
            Arts and Mathematics standards. Tabernacle School has long
            challenged students not just to memorize facts, but to go deeper,
            think critically, and demonstrate a higher level of understanding.
            Other Common Core Standards address only minimum requirements and
            may be one or more grade levels below what we recognize as good
            teaching. We do not limit ourselves to national standards but go
            beyond, based on our philosophy of learning and sound educational
            practices. In other words, Tabernacle School’s curriculum exceeds
            many Common Core Standards in age­ appropriate instruction and
            academic rigor.{" "}
          </p>
        </div>
        <div>
          {ACCORDION_ITEMS.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-base-200 mb-3"
            >
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-bold">
                {item.title}
              </div>
              <div className="collapse-content">
                <p className="text-xl">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
