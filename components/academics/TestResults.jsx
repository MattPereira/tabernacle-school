import { SectionTitle, SectionWrapper } from "@/components/common";
import Image from "next/image";

export default function TestResults() {
  return (
    <SectionWrapper classNames="bg-alternate">
      <SectionTitle title="Test Results" />
      <div className="flex justify-center">
        <Image
          src="/academics/iowa-test-results.png"
          width={1000}
          height={1000}
          alt="Iowa Test Results"
        />
      </div>
    </SectionWrapper>
  );
}
