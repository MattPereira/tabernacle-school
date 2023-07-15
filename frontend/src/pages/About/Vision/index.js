// import { Carousel } from "react-bootstrap";
import { Container, Box, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import SectionTitle from "../../../components/SectionTitle";

import vision1 from "../../../assets/images/about/vision/vision1.jpg";
import vision2 from "../../../assets/images/about/vision/vision2.jpg";
import vision3 from "../../../assets/images/about/vision/vision3.jpg";
import vision4 from "../../../assets/images/about/vision/vision4.jpg";

const visionSlides = [
  {
    image: vision1,
    paragraphs: [
      {
        title: "Partnership",
        text: "We love children and want to see them grow up and become all that they can be. We will work hard to provide the kind of education and learning environment that will help them to blossom as unique individuals created in the image of God. We partner with parents in developing well-prepared children with the character and vision to meet their world with confidence.",
      },
      {
        title: "Acceptance",
        text: `Being accepted for who you are is the most basic human need there is. In our competitive, success-oriented world, doing is often valued more than being. Children must be allowed to grow without being compared to others. They must know and feel they are important, loved, and valued no matter what they look like, how they behave, or what they are able to achieve. Acceptance must come with no strings attached just like the acceptance that is found in the love of Christ.`,
      },
    ],
  },
  {
    image: vision2,
    paragraphs: [
      {
        title: "Challenge",
        text: "Dreams are powerful things. The history of the world is the story of men and women captivated by visions of new horizons, frontiers, and beginnings. In this passive age of comforts and entertainment, children can be severely limited, even robbed, of the time to just dream, to look beyond the “already” and wonder at the “maybe.” Dreams are the stuff from which goals are made, goals that for entire lives and nations.",
      },
      {
        title: "Confidence",
        text: `Children need the confidence to believe in themselves and their potential. We want students' to feel assured in their abilities by interacting with adults who can understand their growing complexities and share in their excitement as they overcome challenges. We want to equip our children with the confidence to explore their identities and potentials, and cheer them on every step of the way.`,
      },
    ],
  },
  {
    image: vision3,
    paragraphs: [
      {
        title: "Discipline",
        text: "A disciplined life does not limit, but liberates the child to reach their potential. Like a river that has overrun its banks, the life without boundaries loses its strength. Without boundaries, children lose their sense of security - knowing that there is someone who will help him or her avoid hazards and maintain control until he or she is mature enough to control is on their own.",
      },
      {
        title: "Freedom",
        text: `Childhood and youth are incredibly short but important spans of time. They are years of intense growth in every area. Our children need every moment of childhood they can get. Children need the freedom to be children and of relating to adults who can see life through their eyes, who can grasp and share the amazement of every new discovery, the pride and joy of accomplishment, and the fun of simple pay. We need to give our kids their childhood and enjoy it with them.`,
      },
    ],
  },
  {
    image: vision4,
    paragraphs: [
      {
        title: "Strength",
        text: "We want our children to be strong, to be able to endure hard things and surmount obstacles and to stand alone if need be. Strength is achieved through adversity. It is facing problems and working through them by the grace God provides that a child can learn strength. Even young children need a certain amount of the right kind of struggles in their lives to exercise the muscles of independence and grow in Christ.",
      },
      {
        title: "Wisdom",
        text: `Life is a journey that is determined by a series of choices.  They need wisdom to make right decisions. They need to hear wisdom from the adults in their lives and from the lessons of history. But the greatest reservoir of wisdom the world has ever known is found in the Bible. To learn its wisdom is to provide them the “light” that will never fail them or lead them astray.`,
      },
    ],
  },
];

const Vision = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "background.alternate" }}>
      <SectionTitle title="Vision" />
      <Container>
        <Carousel
          indicators={false}
          interval={7000}
          duration={1500}
          style={{ position: "relative" }}
        >
          {visionSlides.map((slide, index) => (
            <Grid
              key={index}
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item lg={6}>
                <Box
                  sx={{
                    width: "100%",
                    height: 550,
                    overflow: "hidden",
                    borderRadius: "20px",
                    mx: "auto",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      display: { xs: "none", lg: "block" },

                      width: "100%",
                      height: "100%",
                      objectPosition: "center",
                      objectFit: "cover",
                    }}
                    src={slide.image}
                    alt="..."
                  />
                </Box>
              </Grid>
              <Grid item lg={6}>
                {slide.paragraphs.map((paragraph) => (
                  <Box key={paragraph["title"]} sx={{ mb: 3 }}>
                    <Typography variant="h5" textAlign="center">
                      {paragraph["title"]}
                    </Typography>
                    <Typography variant="p">{paragraph["text"]}</Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Vision;
