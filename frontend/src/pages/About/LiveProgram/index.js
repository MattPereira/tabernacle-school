// prettier-ignore
import { Container, Typography, Box, Tabs, Tab, Grid, Table, TableBody, TableCell, TableRow } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import responsibleImg from "../../../assets/images/about/live/responsible.jpg";
import respectfulImg from "../../../assets/images/about/live/respectful.jpg";
import compassionateImg from "../../../assets/images/about/live/compassionate.jpg";
import cooperativeImg from "../../../assets/images/about/live/cooperative.jpg";
import courageousImg from "../../../assets/images/about/live/courageous.jpg";
import PropTypes from "prop-types";
import * as React from "react";

// import Trait from "./Trait";
import SectionTitle from "../../../components/SectionTitle";

const characterList = [
  {
    title: "Responsible",
    image: responsibleImg,
    adjectives: {
      Industrious: "Getting your work done",
      Truthful: "Honest and conscientious",
      Productive: "Tangible results from your work",
      Reliable: "Dependable and trustworthy",

      Determined: "Exerting personal effort to complete tasks",
      Persistent: "Nothing stops you from doing the right",
      Ambitious: "Willingness to do the work to be successful",
      Wise: "Showing good judgment and making good choices",
      Servanthood: "Serving others throughout your lifetime",
      Resistance: "Resisting evil and doing wrong",
    },
  },
  {
    title: "Respectful",
    image: respectfulImg,
    adjectives: {
      Polite: "Well mannered and honoring in your attitude",
      Obedient: "Submitting to your authority",
      Thinking: "Putting God first in your thoughts",
      Leadership: "Being an example for other students",
      Accepting: "Treat others as you would want to be treated",
      Quiet: "Knowing when not to talk and make noise",
      Encouraging: "Working to build the life of someone else",
      Admission: "Owning up to wrong and accepting the consequences",
      Honoring: "Respectful towards your parents and teachers",
      Disciplined: "Keeping the rules and doing right",
    },
  },
  {
    title: "Compassionate",
    image: compassionateImg,
    adjectives: {
      Caring: "Kind and considerate",
      Gentle: "Gracious and loving",
      Empathy: "Being aware and sensative to the experiences of others",
      Understanding: "Sympathetic",
      Discrete: "Prudent silence and not gossiping",
      Attentive: "Mindful and observant",
      Friendly: "Warm and accepting",
      Forgiving: "Allowing room for faults and showing mercy",
      Passionate: "Expressing feelings for those in need",
      Selfless: "Sacrficing to help others",
    },
  },
  {
    title: "Cooperative",
    image: cooperativeImg,
    adjectives: {
      Obedient: "Follow instructions carefully",
      Attentive: "Paying attention",
      Flexible: "Agreeable and adaptable",
      Peaceful: "Calm and untroubled",
      Fair: "Impartial, objective, and reasonable",
      Joyful: "Happy and contended in all circumstances",
      Thankful: "Gratitude and appreciation",
      Positive: "Accepting and affirming to everyone",
      Faithful: "Loyal and steadfast",
      Patient: "Bearing difficult things calmly without complaining",
    },
  },
  {
    title: "Courageous",
    image: courageousImg,
    adjectives: {
      Determined: "To know Jesus and make Him known",
      Loving: " Providing for those in need, protecting the disenfranchised",
      Receptive: "Very teachable",
      Disciplined: "Doing the right thing",
      Thinking: "Understand logical consequences of choices",
      Vigilant: "Watchful about personal behavior",
      Brave: "Willing to stand alone for their convictions",
      Decisive: "Able to make good choices quickly",
      Reliable: "Following through on commitments",
      Focused: "Willingly follow Jesus and obeys Him",
    },
  },
];

export default function LiveProgram() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Live Program" />
      <Container>
        <Box sx={{ mb: 3 }}>
          <Typography variant="p">
            Teaching character is an important part of our philosophy at
            Tabernacle School. We emphasize five different character traits in
            our classrooms: responsible, respectful, compassionate, cooperative,
            and courageous. Teachers recognize students for showing these
            character traits in the classroom and at quarterly assemblies. If a
            student shows exceptional character in one of these areas a teacher
            will send them to the office for “Caught Being Good”. There they get
            a sticker that they proudly display for the rest of the day. Their
            name is added to our character bulletin board in the lunchroom and a
            letter is sent home detailing why they were sent to the office.
            Below are some examples of how each character trait is displayed in
            our students.
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: "100%",
            bgcolor: "background.paper",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant={isSmallScreen ? "scrollable" : "standard"}
            // scrollButtons
            // allowScrollButtonsMobile
            centered={!isSmallScreen}
            aria-label="scrollable auto tabs example"
            sx={{ mb: { xs: 0, md: 3 } }}
          >
            {characterList.map((item) => (
              <Tab
                key={item.title}
                label={item.title}
                sx={{
                  fontFamily: "Didact Gothic",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              />
            ))}
          </Tabs>
          {characterList.map((item, index) => (
            <CustomTabPanel value={value} index={index} key={item.title}>
              <Trait image={item.image} adjectives={item.adjectives} />
            </CustomTabPanel>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Trait({ image, adjectives }) {
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={5}>
        <Box sx={{ height: "100%", overflow: "hidden", p: { xs: 0, md: 3 } }}>
          <Box
            component="img"
            src={image}
            sx={{
              display: { xs: "none", md: "block" },
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "10px",
            }}
            alt="responsible children reading books"
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={7}>
        <Table>
          <TableBody>
            {Object.entries(adjectives).map((adjective, index) => (
              <TableRow key={adjective[0]}>
                <TableCell
                  sx={{
                    fontFamily: "didact gothic",
                    fontSize: "18px",
                    p: 1,
                    fontWeight: "bold",
                  }}
                >
                  {adjective[0]}
                </TableCell>
                <TableCell
                  sx={{ fontFamily: "didact gothic", fontSize: "18px", p: 1 }}
                >
                  {adjective[1]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}
