import Image from "next/image";
import { SectionTitle, SectionWrapper } from "../common";

export function Accreditations() {
  return (
    <SectionWrapper classNames="bg-white">
      <SectionTitle title="Accreditations" />

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-14 items-center mb-10">
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
          <Image
            height={500}
            width={500}
            className="w-full sm:w-1/2 lg:w-full mx-auto"
            src="/homepage/acsi.png"
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
          <Image
            className="w-1/2 sm:w-1/4 lg:w-1/2 mx-auto"
            height={500}
            width={500}
            src="/homepage/wasc.jpeg"
            alt="Western Association of Schools and Colleges"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
