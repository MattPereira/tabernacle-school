import { Box, Container } from "@mui/material";

export default function SectionWrapper({ children, bgcolor, ...props }) {
  return (
    <Box
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: bgcolor || "white",
      }}
    >
      <Container>{children}</Container>
    </Box>
  );
}
