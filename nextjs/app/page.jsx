import {
  PhotosBanner,
  StatementSlider,
  EducationLevels,
  ParentTestimonials,
  Accreditations,
} from "@/components/home";

/**
 * Homepage component
 */

export default function HomePage() {
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
