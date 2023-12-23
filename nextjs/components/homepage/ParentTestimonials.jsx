import { SectionTitle, SectionWrapper } from "..";

export default function ParentTestimonials() {
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
