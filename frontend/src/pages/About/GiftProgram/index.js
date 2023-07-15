import SectionTitle from "../../../components/SectionTitle";
import { Container, Box, Grid, Typography } from "@mui/material";

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

const giftList = [
  {
    title: "Linguistic",
    image: linguistic,
    bgColor: "#0066CC",
    definition: "The ability to use words effectively",
    description:
      "A student with this gift will show great skill with written and/or spoken language. Political leaders, legal experts and writers have developed this ability to a high degree.",
  },
  {
    title: "Logical",
    image: logical,
    bgColor: "#D91E18",
    definition: "The ability to use reason well",
    description:
      "A child with this ability is interested in patterns and relationships among things and loves puzzles and brainteasers. Future technology and financial specalists.",
  },
  {
    title: "Musical",
    image: musical,
    bgColor: "#196F3D",
    definition: "A keen ear and sense of rhythm",
    description:
      "These children possess an innate sensitivity toward the musical elements of melody, tone, and rhythm. Many professional musicians first demonstrated musical potential at a very early age.",
  },
  {
    title: "Spatial",
    image: spatial,
    bgColor: "#D4AC0D",
    definition: "The ability to perceive and transform things visually",
    description:
      "Thinking in three dimensional terms, these children see things clearly in the mind’s eye, and can manipulate things with their imaginations. Future mechanics artists, designers, and surgeons.",
  },
  {
    title: "Bodily-Kinesthetic",
    image: bodily,
    bgColor: "#0066CC",
    definition: "Using one's body with grace or agility",
    description:
      "Kinesthetically gifted children are gifted with fine-motor skills used for sewing, crafts, typing, drawing and fixing machinery. Future athletes, dancers, swimmers,inventors and actors.",
  },
  {
    title: "Interpersonal",
    image: interpersonal,
    bgColor: "#D91E18",
    definition: "Adept at understanding others",
    description:
      "The ability to empathize, understand and communicate with other people. These children have an uncanny sense of saying or doing the right thing at just the right time. Future teachers, therapists, and counselors",
  },
  {
    title: "Intrapersonal",
    image: intrapersonal,
    bgColor: "#196F3D",
    definition: "Having deep insight into oneself",
    description:
      "Children who recognize their own strengths and weaknesses. The ability to detect and to symbolize complex and highly differentiated sets of feelings. Future writers, poets, and philosophers.",
  },
  {
    title: "Leadership",
    image: leadership,
    bgColor: "#D4AC0D",
    definition: "Guiding peers with love and service",
    description:
      "We believe this gift is God-given. Students are encouraged and taught how to serve others. Future teachers, pastors, presidents, and politicians.",
  },
  {
    title: "Creationist",
    image: creationist,
    bgColor: "#0066CC",
    definition: "Comprehension and love of God’s creation",
    description:
      "The creationist intelligence is connected to the cosmos and the belief in the truthful narrative of the creation of God. Future farmers, scientists, and geologists.",
  },
  {
    title: "Moral Intelligence",
    image: moral,
    bgColor: "#D91E18",
    definition: "Having a desire to live ethically",
    description:
      "Children who have a heart attitude and desire to conscientiously seek truth and justice. They are able to delay self-gratification and make good decisions.",
  },
];

export default function GiftProgram() {
  return (
    <Box sx={{ py: 8, bgcolor: "background.alternate" }}>
      <SectionTitle title="Gift Program" />
      <Container>
        <Box sx={{ mb: 8 }}>
          <Typography variant="p">
            At Tabernacle we believe every child is a gifted child, and we
            respect the unique giftedness of all children by working to help
            them discover and develop their gifts. Because children are gifted
            in different ways, we offer a broad range of programs designed to
            help them develop their own unique strengths. We respect and work to
            develop the following universally recognized areas of giftedness.
          </Typography>
        </Box>

        <Grid
          container
          spacing={2}
          sx={{ flexWrap: "nowrap", overflowX: "auto" }}
        >
          {giftList.map((gift) => (
            <Grid item key={gift.title}>
              <GiftCard
                image={gift.image}
                bgColor={gift.bgColor}
                title={gift.title}
                definition={gift.definition}
                description={gift.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function GiftCard({ image, title, definition, description, bgColor }) {
  return (
    <Box
      className={`${bgColor}`}
      sx={{
        width: "350px",
        height: "550px",
        px: 3,
        pb: 3,
        pt: 2,
        mb: 3,
        color: "white",
        borderRadius: "10px",
        bgcolor: bgColor,
      }}
    >
      <Typography variant="h4" textAlign="center" gutterBottom>
        {title}
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Box
          sx={{
            width: 300,
            height: 200,
            borderRadius: "10px",
            overflow: "hidden",
            mx: "auto",
          }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
      </Box>
      <Box>
        <Box sx={{ mb: 1 }}>
          <Typography
            variant="p"
            sx={{ fontStyle: "italic", fontWeight: "bold" }}
          >
            {definition}
          </Typography>
        </Box>

        <Box>
          <Typography variant="p">{description}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
