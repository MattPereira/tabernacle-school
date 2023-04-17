import bodily from "../../../assets/images/about/gift/bodily.jpg";
import linguistic from "../../../assets/images/about/gift/linguistic.jpg";
import interpersonal from "../../../assets/images/about/gift/interpersonal.jpg";
import intrapersonal from "../../../assets/images/about/gift/intrapersonal.jpg";
import logical from "../../../assets/images/about/gift/logical.jpg";
import musical from "../../../assets/images/about/gift/musical.jpg";
import spatial from "../../../assets/images/about/gift/spatial.jpg";
import leadership from "../../../assets/images/about/gift/leadership.jpg";
import creationist from "../../../assets/images/about/gift/creationist.jpg";
import moral from "../../../assets/images/about/gift/moral.jpg";
import displayImg from "../../../assets/images/about/gift/display.jpg";

import SectionTitle from "../../../components/SectionTitle";
import { Accordion } from "react-bootstrap";
import GiftCard from "./GiftCard";
import { Container, Box, Grid, Typography } from "@mui/material";

const GiftProgram = () => {
  return (
    <Box sx={{ py: 6, bgcolor: "background.alternate" }}>
      <SectionTitle title="Gift Program" />
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <div>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Linguistic</Accordion.Header>
                  <Accordion.Body>
                    <GiftCard
                      image={linguistic}
                      bgColor={"bg-primary text-white"}
                      title="Linguistic"
                      definition="The ability to use words effectively."
                      description="A student with this gift will show great skill with written and/or spoken language. Political leaders, legal experts and writers have developed this ability to a high degree."
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Logical</Accordion.Header>
                  <Accordion.Body>
                    <GiftCard
                      image={logical}
                      bgColor={"bg-warning text-dark"}
                      title="Logical-Mathematical"
                      definition="The ability to reason well."
                      description="A child with this ability is interested in patterns and relationships among things and loves puzzles and brainteasers. Future technology and financial specalists."
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Musical</Accordion.Header>
                  <Accordion.Body>
                    <GiftCard
                      image={musical}
                      bgColor={"bg-success text-white"}
                      title="Musical"
                      definition="A keen ear and sense of rhythm."
                      description="These children possess an innate sensitivity toward the musical elements of melody, tone, and rhythm. Many professional musicians first demonstrated musical potential at a very early age."
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Spatial</Accordion.Header>
                  <Accordion.Body>
                    <GiftCard
                      image={spatial}
                      bgColor={"bg-danger text-white"}
                      title="Spatial"
                      definition="The ability to perceive and transform things visually."
                      description={`Thinking in three dimensional terms, these children see things clearly in the mind’s eye, and can manipulate things with their imaginations. Future mechanics artists, designers, and surgeons.`}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Bodily</Accordion.Header>
                  <Accordion.Body>
                    <GiftCard
                      image={bodily}
                      bgColor={"bg-info text-dark"}
                      title="Bodily-Kinestetic"
                      definition="Using one's body with grace or agility"
                      description="Kinesthetically gifted children are gifted with fine-motor skills used for sewing, crafts, typing, drawing and fixing machinery. Future athletes, dancers, swimmers,inventors and actors."
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Interpersonal</Accordion.Header>
                  <Accordion.Body>
                    <GiftCard
                      image={interpersonal}
                      bgColor={"bg-primary"}
                      title="Interpersonal"
                      definition="Adept at understanding others."
                      description="The ability to empathize, understand and communicate with other people. These children have an uncanny sense of saying or doing the right thing at just the right time. Future teachers, therapists, and counselors."
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>Intrapersonal</Accordion.Header>
                  <Accordion.Body>
                    <GiftCard
                      image={intrapersonal}
                      bgColor={"bg-warning text-dark"}
                      title="Intrapersonal"
                      definition="Having deep insight into oneself."
                      description="Children who recognize their own strengths and weaknesses. The ability to detect and to symbolize complex and highly differentiated sets of feelings. Future writers, poets, and philosophers."
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>Leadership</Accordion.Header>
                  <Accordion.Body>
                    <GiftCard
                      image={leadership}
                      bgColor={"bg-success text-white"}
                      title="Leadership"
                      definition="Guiding others through love and service"
                      description="We believe this gift is God-given. Students are encouraged and taught how to serve others. Future teachers, pastors, presidents, and politicians."
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>Creationist</Accordion.Header>
                  <Accordion.Body>
                    <GiftCard
                      image={creationist}
                      bgColor={"bg-danger text-white"}
                      title="Creationist"
                      definition="Comprehension and love of God’s creation"
                      description="The creationist intelligence is connected to the cosmos and the belief in the truthful narrative of the creation of God. Future farmers, scientists, and geologists."
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>Moral Intelligence</Accordion.Header>
                  <Accordion.Body>
                    <GiftCard
                      image={moral}
                      bgColor={"bg-info text-dark"}
                      title="Moral Intelligence"
                      definition="Having a desire to live ethically."
                      description="Children who have a heart attitude and desire to conscientiously seek truth and justice. They are able to delay self-gratification and make good decisions."
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Grid>
          <Grid item md={6}>
            <Box
              component="img"
              src={displayImg}
              sx={{
                width: "100%",
                borderRadius: "10px",
                objectFit: "cover",
                height: "300px",
                mb: 3,
              }}
            />
            <Box>
              <Typography variant="p">
                At Tabernacle we believe every child is a gifted child, and we
                respect the unique giftedness of all children by working to help
                them discover and develop their gifts. Because children are
                gifted in different ways, we offer a broad range of programs
                designed to help them develop their own unique strengths. We
                respect and work to develop the following universally recognized
                areas of giftedness.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GiftProgram;
