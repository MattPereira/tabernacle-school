import { Box, Container } from "@mui/material";

export default function SectionWrapper({ children, classNames, ...props }) {
  return (
    <div className={`py-14 md:py-20 ${classNames ? classNames : ""}`}>
      <Container>{children}</Container>
    </div>
  );
}
