import { Carousel } from "react-bootstrap";
import { Container, Box } from "@mui/material";

import SectionTitle from "../../../common/SectionTitle";

import vision1 from "../../../assets/images/about/vision/vision1.jpg";
import vision2 from "../../../assets/images/about/vision/vision2.jpg";
import vision3 from "../../../assets/images/about/vision/vision3.jpg";
import vision4 from "../../../assets/images/about/vision/vision4.jpg";

import Slide from "./Slide";
import "./index.scss";

const Vision = () => {
  return (
    <Box id="Vision" sx={{ py: 5, bgcolor: "background.alternate" }}>
      <SectionTitle title="Vision" />
      <Container sx={{ py: 5 }}>
        <Carousel indicators={false} controls={false}>
          <Carousel.Item>
            <Slide
              image={vision1}
              paragraphs={[
                {
                  title: "Partnership",
                  text: "We love children and want to see them grow up and become all that they can be. We will work hard to provide the kind of education and learning environment that will help them to blossom as unique individuals created in the image of God. We partner with parents in developing well-prepared children with the character and vision to meet their world with confidence.",
                },
                {
                  title: "Acceptance",
                  text: `Being accepted for who you are is the most basic human need there is and often the most painfully neglected. In our competitive, success-oriented world, doing is often valued more than being. Children must be allowed to grow without being compared to others. They must know and feel they are important, loved, and valued no matter what they look like, how they behave, or what they are able to achieve. Acceptance must come with no strings attached- just like the acceptance that is found in the love of Christ.`,
                },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              image={vision2}
              paragraphs={[
                {
                  title: "Challenge",
                  text: "Dreams are powerful things. The history of the world is the story of men and women captivated by visions of new horizons, new frontiers, and new beginnings. Our nation owes its birth to many such dreamers. In this passive age of comforts and entertainment, children can be severely limited, even robbed, of the time to just dream, to look beyond the “already” and wonder at the “maybe.” Dreams are the stuff from which goals are made, goals that for entire lives and nations.",
                },
                {
                  title: "Confidence",
                  text: `Childhood and youth are incredibly short but important spans of time. They are years of intense growth in every area. And since our culture has one of the earliest periods of adolescence in the world, our children need every moment of childhood they can get. Children need the freedom to be children and of relating to adults who can see life through their eyes, who can grasp and share the amazement of every new discovery, the pride and joy of accomplishment, and the fun of simple pay. We need to give our kids their childhood and enjoy it with them.`,
                },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              image={vision3}
              paragraphs={[
                {
                  title: "Discipline",
                  text: "A disciplined life doesn’t really limit; it liberates the child to reach their potential. Like a river that has overrun its banks, the life without boundaries loses its strength. And where there are no boundaries, a child loses their sense of security- knowing that there is someone who will help him or her avoid hazards and maintain control until he or she is mature enough to control is on their own. After all, that is the goal of discipline: self-discipline, that beautiful quality of life based on strength of character.",
                },
                {
                  title: "Freedom",
                  text: `Childhood and youth are incredibly short but important spans of time. They are years of intense growth in every area. And since our culture has one of the earliest periods of adolescence in the world, our children need every moment of childhood they can get. Children need the freedom to be children and of relating to adults who can see life through their eyes, who can grasp and share the amazement of every new discovery, the pride and joy of accomplishment, and the fun of simple pay. We need to give our kids their childhood and enjoy it with them.`,
                },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              image={vision4}
              paragraphs={[
                {
                  title: "Strength",
                  text: "We want our children to be strong, to be able to endure hard things and surmount obstacles and to stand alone if need be. Strength is achieved through adversity. It is facing problems and working through them by the grace God provides that a child can learn strength. Even young children need a certain amount of the right kind of struggles in their lives to exercise the muscles of independence and grow in Christ.",
                },
                {
                  title: "Wisdom",
                  text: `Life is a journey that is determined by a series of choices. Children begin making their own choices almost from the moment of self-awareness. Children need wisdom to make right decisions. They need to hear wisdom from the adults in their lives and from the lessons of history. But the greatest reservoir of wisdom the world has ever known is found in the Bible. To learn its wisdom is to provide them the “light” that will never fail them or lead them astray.`,
                },
              ]}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </Box>
  );
};

export default Vision;
