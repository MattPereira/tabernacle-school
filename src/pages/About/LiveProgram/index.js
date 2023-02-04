import { Tab, Tabs } from "react-bootstrap";
import { Container, Typography, Box } from "@mui/material";

import responsibleImg from "../../../assets/images/about/live/responsible.jpg";
import respectfulImg from "../../../assets/images/about/live/respectful.jpg";
import compassionateImg from "../../../assets/images/about/live/compassionate.jpg";
import cooperativeImg from "../../../assets/images/about/live/cooperative.jpg";
import courageousImg from "../../../assets/images/about/live/courageous.jpg";

import Trait from "./Trait";
import SectionTitle from "../../../common/SectionTitle";

const characteristics = {
  Responsible: {
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
  Respectful: {
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
  Compassionate: {
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
  Cooperative: {
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
  Courageous: {
    image: courageousImg,
    adjectives: {
      Determined: "To know Jesus and make Him known",
      Loving: " Providing for those in need, protecting the disenfranchised",
      Receptive: "Very teachable",
      Disciplined: "Doing the right thing",
      Thinking: "Understand logical consequences of choices",
      Vigilant: "Watchful about personal behavior",
      Thoughtful: "Able to discern appropriate friendships",
      Brave: "Willing to stand alone for their convictions",
      Decisive: "Able to make good choices quickly",
      Trustworthy: "Very dependable",
      Controlled: "Able to keep their spirit under control",
      Reliable: "Following through on commitments",
      Focused: "Willingly follow Jesus and obeys Him",
    },
  },
};

const LiveProgram = () => {
  return (
    <Box id="Programs" sx={{ py: 5 }}>
      <SectionTitle title="Live Program" />
      <Container sx={{ py: 5 }}>
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

        <div id="live-tabs">
          <Tabs
            defaultActiveKey="Responsible"
            id="uncontrolled-tab-example"
            className="mb-3"
            justify
            variant="pills"
          >
            {Object.entries(characteristics).map((characteristic, index) => (
              <Tab
                eventKey={characteristic[0]}
                title={characteristic[0]}
                key={characteristic[0]}
              >
                <Trait
                  image={characteristic[1].image}
                  adjectives={characteristic[1].adjectives}
                />
              </Tab>
            ))}
          </Tabs>
        </div>
      </Container>
    </Box>
  );
};

export default LiveProgram;
