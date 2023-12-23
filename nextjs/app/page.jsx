import PhotosBanner from "@/components/homepage/PhotosBanner";
import StatementSlider from "@/components/homepage/StatementSlider";
import EducationLevels from "@/components/homepage/EducationLevels";
import ParentTestimonials from "@/components/homepage/ParentTestimonials";
import Accreditations from "@/components/homepage/Accreditations";

export default function Homepage() {
  return (
    <>
      <PhotosBanner />
      <StatementSlider />
      <EducationLevels />
      <ParentTestimonials />
      <Accreditations />
    </>
  );
}
