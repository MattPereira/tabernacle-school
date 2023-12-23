import { SectionTitle, SectionWrapper } from "@/components/common";
import Image from "next/image";

export default function Elementary() {
  return (
    <SectionWrapper classNames="bg-alternate">
      <SectionTitle title="Elementary" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="text-xl font-gothic mb-5">
            We understand how important it is to find the right elementary
            program to fit the needs of your growing child. At Tabernacle, we
            provide an elementary education that prepares children to think
            clearly, act responsibly, and live ethically. Our programs and
            curriculum give our students a competitive edge in an increasingly
            complex society as they discover their unique giftedness.{" "}
          </p>
          <p className="text-xl font-gothic">
            Our qualified teachers are passionate about providing a high-quality
            education while developing students' love for Christ in a caring and
            safe environment. We provide different modalities of learning
            knowing that God has created each child to be unique. Through
            hands-on projects and enrichment activities such as electives,
            physical education, integrated technology, and field trips,
            Tabernacle equips our students to thrive academically, socially, and
            emotionally.
          </p>
        </div>
        <div>
          <Image
            width={500}
            height={500}
            className="w-full rounded-2xl"
            src="/academics/elementary.jpg"
            alt="Smiling children"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
