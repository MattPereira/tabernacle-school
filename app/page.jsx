import {
  PhotosBanner,
  StatementSlider,
  EducationLevels,
  ParentTestimonials,
  Accreditations,
  SchoolSpotlight,
} from "@/components/home";

/**
 * Homepage component
 */

export default function HomePage() {
  return (
    <>
      <PhotosBanner />
      <StatementSlider />
      <SchoolSpotlight />
      <EducationLevels />
      <ParentTestimonials />
      <Accreditations />
    </>
  );
}
