import { SectionTitle, SectionWrapper } from "../../components";

const ITEMS = [
  {
    title: "Lifelong Learner",
    content:
      "Is accountable for exerting personal effort towards his/her educational responsibility to be self-controlled and productive in the classroom and his/her commitment to live-long learning. Recognizes and develops his/her unique gifts by setting short-term and life-long personal goals which honor God, the Creator or gifts. Demonstrates leadership skills which are evidenced by living ethically and morally pure before both God and man while cultivating mental discipline and discernment as an involved citizen of the society.",
  },
  {
    title: "Faithful Follower of Jesus",
    content:
      "After accepting the Lord Jesus Christ as personal Savior, demonstrates an on-going, deepening love relationship with the Lord as evidenced by a Christ-centered life displaying the personal attributes of Jesus. Develops a Biblical world view which results in a proper perspective of God as Heavenly Father and produces a growing trust in Him as Provider, Sustainer, and Controller of life. Shows evidence of a conscience sensitive to God’s commandments by knowing and applying God’s Word to all aspects of life.",
  },
  {
    title: "Academic Achiever",
    content:
      "Reads with good comprehension and writes with clear expression, meaningful vocabulary, and organization of thought. Applies critical thinking and problem solving skills to all types of learning and life situations. Communicates effectively with others by listening attentively and speaking clearly with confidence. Exercises a variety of methods, strategies and tools, including technology, to conduct research, evaluate information, and make responsible decisions in light of Biblical truths.",
  },
  {
    title: "Citizen of Character",
    content:
      "Demonstrates respectful and responsive behavior towards others, with the right heart attitude. Exhibits responsible conduct in word and action, employing resourcefulness in accomplishing educational and life objectives. Works receptively with a diversity of people in a variety of frameworks with a resolute approach to learning.",
  },
];

export default function ExpectedLearningResults() {
  return (
    <SectionWrapper classNames="bg-alternate">
      <SectionTitle title="Expected Learning Results" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {ITEMS.map((item, index) => (
          <div key={item.title} className="mb-4">
            <h5 className="text-center text-2xl font-bold mb-5">
              {item.title}
            </h5>
            <p className="text-xl">{item.content}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
