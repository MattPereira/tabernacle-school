import { SectionTitle, SectionWrapper } from "@/components/common";
import Image from "next/image";

export default function Preschool() {
  return (
    <SectionWrapper>
      <SectionTitle title="Preschool" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 items-center">
        <div className="h-full">
          <Image
            width={1000}
            height={1000}
            className="rounded-2xl mb-5 h-full object-cover"
            src="/academics/preschool.jpg"
            alt="Group of preschool children"
          />
        </div>
        <div>
          <p className="text-xl font-gothic">
            Tabernacle’s Tiny Tigers is a licensed preschool facility and open
            to children from every background. We are a family-centered school,
            partnering with parents to ensure the success of every child. Clear
            and consistent communication between home and school is essential.
            Our school has been serving families in the community for 44 years.
            We offer a variety of childcare options to meet your individual
            family needs. We have half day and full day options available.
            Daycare is available from 6:45am to 6:00pm. Parents and children who
            attend Tabernacle will tell you that our school feels like a family.
            Many of our teachers and staff are former students who return to
            invest back into the school community. Lasting friendships are
            formed here. We invite you to start your experience at Tabernacle by
            joining the Tiny Tigers and watching your child excel.
          </p>
        </div>
      </div>
      <div>
        <p className="text-xl font-gothic">
          Our classrooms and dedicated teachers offer students the opportunity
          to learn and discover more about themselves, their world, and each
          other in a warm and safe environment. Each of our teachers is trained
          in early childhood education and has a passion to see children excel.
          We provide a quality preschool program that combines play-based and
          academic curriculum to help our students prepare for kindergarten. We
          carefully plan activities that are developmentally appropriate and
          encourage exploration, fine-motor improvement, an interest in science
          and mathematics, and early literacy. Establishing routines and
          procedures is an important part of our program. These practices
          provide a safety and security that allows children the freedom to
          thrive. We encourage healthy lifestyle choices with our snack and
          lunch program.
        </p>
      </div>
    </SectionWrapper>
  );
}
