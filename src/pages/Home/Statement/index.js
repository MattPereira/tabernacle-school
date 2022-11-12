import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";

const statements = [
  {
    title: "Mission",
    text: "Teaching in all areas of life, the Truth, as centered in the Lord Jesus of the Bible.",
  },
  {
    title: "Vision",
    text: "To see children grow up and reach their full potential by providing an environment that allows students to blossom as unique individuals created in the image of God.",
  },
  {
    title: "Philosophy",
    text: "All children are gifted, and our responsibility is to help students discover and develop the unique abilities that God has given them.",
  },
];

const Statement = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = statements.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeStep === maxSteps - 1) {
        setActiveStep(0);
      } else {
        setActiveStep(activeStep + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeStep, maxSteps]);

  return (
    <Container
      sx={{
        py: 5,
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4">{statements[activeStep].title}</Typography>
      <Typography variant="p">{statements[activeStep].text}</Typography>
    </Container>
  );
};

export default Statement;
