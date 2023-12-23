import { SectionTitle, SectionWrapper } from "@/components/common";
import Image from "next/image";

export default function MiddleSchool() {
  return (
    <SectionWrapper>
      <SectionTitle title="Middle School" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 items-center">
        <div>
          <Image
            width={500}
            height={500}
            className="w-full h-72 sm:h-96 object-cover rounded-2xl"
            src="/academics/junior-high.jpg"
            alt="junior high students"
          />
        </div>
        <div>
          <p className="text-xl font-gothic">
            We are thrilled to welcome you to Tabernacle Middle School, where we
            help our students navigate the early teen years and prepare to excel
            in high school and beyond. Throughout the middle school years, our
            students are challenged academically and grow in confidence as they
            explore their interests. We consider it an honor to partner with you
            in providing support and guidance for your children as they grow
            academically, spiritually, and athletically. We offer a strong list
            of academic and elective courses that meet our standard of
            excellence and help our students gain a solid academic footing in
            preparation for high school. Because of our high standards, our
            students regularly perform beyond grade level in national standard
            testing.
          </p>
        </div>
      </div>
      <p className="text-xl font-gothic">
        Our middle school students have the opportunity to attend hands-on
        learning experiences as they go to a four-day outdoor education science
        camp in sixth grade. Students in the eighth grade take a week-long trip
        to Washington D.C. to visit the places they have learned about in our
        country’s history. Middle school students at Tabernacle have access to
        state-of-the-art computer and science labs, award winning school sports
        teams, and an enriching extended care program before and after school.
        Biblical truth is a part of everything we teach through daily Bible
        classes, weekly chapels, and classroom Biblical integration. We have our
        own chapel band lead us in worship during chapel time on Fridays and
        have guest speakers join our staff presenting God’s Word in the Bible.
      </p>
    </SectionWrapper>
  );
}
