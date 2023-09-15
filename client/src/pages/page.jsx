// External imports
import Carousel from "react-material-ui-carousel";
import { HashLink } from "react-router-hash-link";

// Accreditations Image Imports
import asci from "../assets/images/homepage/acsi.png";
import wasc from "../assets/images/homepage/wasc.jpeg";

// Internal Component Imports
import { SectionTitle, SectionWrapper } from "../components";

export default function Homepage() {
  return (
    <>
      <LandingShowcase />
      <StatementSlider />
      <EducationLevels />
      <ParentTestimonials />
      <Accreditations />
    </>
  );
}

function LandingShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="col-span-1">
        <img
          className="w-full h-full"
          src="/images/home-showcase-1.jpg"
          alt="showcase image"
        />
      </div>

      <div className="col-span-1 md:flex md:col-span-1 hidden">
        <img
          className="w-full"
          src="/images/home-showcase-2.jpg"
          alt="showcase image"
        />
      </div>

      <div className="col-span-1 xl:flex hidden">
        <img
          className="w-full"
          src="/images/home-showcase-4.jpg"
          alt="showcase image"
        />
      </div>

      <div className="col-span-1 lg:flex hidden">
        <img
          className="w-full"
          src="/images/home-showcase-3.jpg"
          alt="showcase image"
        />
      </div>
    </div>
  );
}

const STATEMENTS = [
  {
    title: "Mission",
    text: "Teaching in all areas of life, the Truth, as centered in the Lord Jesus of the Bible.",
  },
  {
    title: "Vision",
    text: "To see children grow up and reach their full potential by providing an environment that allows students to blossom as unique individuals created in the image of God.",
  },
  {
    title: "Philosophy",
    text: "All children are gifted, and our responsibility is to help students discover and develop the unique abilities that God has given them.",
  },
];

function StatementSlider() {
  return (
    <SectionWrapper classNames="text-center h-72 flex flex-col justify-center">
      <Carousel interval={5000} duration={1500}>
        {STATEMENTS.map((statement, idx) => (
          <div key={idx}>
            <h4 className="font-copse text-2xl md:text-3xl">
              {statement.title}
            </h4>
            <p className="font-gothic text-xl">{statement.text}</p>
          </div>
        ))}
      </Carousel>
    </SectionWrapper>
  );
}

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

function EducationLevels() {
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
              <HashLink
                className="inline-block text-xl font-copse text-white border border-white rounded-full px-8 py-2 hover:bg-white hover:text-black transition"
                to={group.link}
              >
                Learn More
              </HashLink>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function ParentTestimonials() {
  return (
    <SectionWrapper classNames="bg-alternate">
      <SectionTitle title="Parent Testimonials" />

      <div className="mb-6">
        <blockquote>
          <p className="text-xl">
            “I couldn’t say enough great things about Tabernacle’s preschool
            program. I appreciate them so much and wish I could have them be my
            daughter’s teachers forever. They are the most loving, smart, kind
            hearted, caring teachers I have ever met. We are so blessed to have
            them in our kids lives! They are the very best.”
          </p>
        </blockquote>
        <figcaption className="text-neutral-400 text-lg">
          — Preschool parent, 2019
        </figcaption>
      </div>
      <div className="mb-6">
        <blockquote>
          <p className="text-xl">
            “My child’s third grade teacher is incredible! She is caring,
            encouraging and supportive, while still holding high expectations to
            ensure the students are ready for 4th grade and beyond. With any
            question or concerns that I have had throughout the year, she is
            timely in her response with a wealth of knowledge and resources. Her
            help class has been such a lifesaver to my son, giving him the
            additional practice and encouragement on those more challenging
            concepts throughout the year. I have seen my son grow into a more
            confident learner and this is a huge thank you to his teacher and
            the safe learning environment she creates in her classroom.”
          </p>
        </blockquote>
        <figcaption className="text-neutral-400 text-lg">
          — Third grade parent, 2019
        </figcaption>
      </div>
      <div className="mb-6">
        <blockquote>
          <p className="text-xl">
            “We feel blessed that two of our three children have attended
            Tabernacle. Knowing that the teachers care, that they can be
            themselves without a ‘direct worldly attack’, and that there are
            opportunities in leadership, sports, and a Christian walk are worth
            the sacrifices we make as parents for them to attend here. We
            appreciate all the Tabernacle offers their students, families, and
            staff.”
          </p>
        </blockquote>
        <figcaption className="text-neutral-400 text-lg">
          — Middle school parent, 2016
        </figcaption>
      </div>
    </SectionWrapper>
  );
}

function Accreditations() {
  return (
    <SectionWrapper>
      <SectionTitle title="Accreditations" />

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center mb-10">
        <div className="col-span-4">
          <h5 className="text-xl font-bold mb-1">
            ASSOCIATION OF CHRISTIAN SCHOOLS INTERNATIONAL
          </h5>
          <p className="text-xl">
            Tabernacle School is accredited by the Association of Christian
            Schools International (ACSI). ACSI endeavors to "strengthen
            Christian schools and equip Christian educators worldwide as they
            prepare students academically and inspire them to become devoted
            followers of Jesus Christ."
          </p>
        </div>
        <div className="col-span-2">
          <img
            className="w-full sm:w-1/2 lg:w-full mx-auto"
            src={asci}
            alt="ACSI accreditaiton logo"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center mb-10">
        <div className="col-span-4">
          <h5 className="text-xl font-bold mb-1">
            WESTERN ASSOCIATION OF SCHOOLS AND COLLEGES
          </h5>
          <p className="text-xl">
            Tabernacle School is also accredited by the Western Association of
            Schools and Colleges (WASC). WASC fosters "excellence in elementary,
            secondary, adult and postsecondary institutions, and supplementary
            education programs. The Commission encourages school improvement
            through a process of continuing evaluation and recognizes
            institutions through granting accreditation to the schools that meet
            an acceptable level of quality in accordance with the established
            criteria."
          </p>
        </div>
        <div className="col-span-2">
          <img
            className="w-1/2 sm:w-1/4 lg:w-1/2 mx-auto"
            src={wasc}
            alt="Western Association of Schools and Colleges"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
