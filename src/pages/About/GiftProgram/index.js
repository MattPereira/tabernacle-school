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

import { Row, Col } from "react-bootstrap";
import GiftCard from "./GiftCard";

import Marquee from "react-fast-marquee";
import "./index.scss";

const GiftProgram = () => {
  return (
    <section id="Programs" className="py-5 bg-light">
      <h2 className="display-2 text-center pt-5">Gift Program</h2>
      <hr className="section-hr mb-4" />
      <div className="container py-5">
        <Row className="justify-content-center">
          <Col xl={10}>
            <p className="lead mb-5">
              Every child is a gifted child. At Tabernacle we respect the unique
              giftedness of all children and work to help them discover and
              develop their gifts.Because children are gifted in different ways,
              we offer a broad range of programs designed to help them develop
              their own unique strengths. We respect and work to develop the
              following universally recognized areas of giftedness.
            </p>
          </Col>
        </Row>
        <div className="giftsContainer">
          <div className="gift--scroll">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              <Row>
                <GiftCard
                  image={linguistic}
                  bgColor={"bg-primary text-white"}
                  title="Linguistic"
                  definition="The ability to use words effectively."
                  description="A student with this gift will show great skill with written and/or spoken language. Political leaders, legal experts and writers have developed this ability to a high degree."
                />
                <GiftCard
                  image={logical}
                  bgColor={"bg-warning text-dark"}
                  title="Logical-Mathematical"
                  definition="The ability to reason well."
                  description="A child with this ability is interested in patterns and relationships among things and loves puzzles and brainteasers. Future technology and financial specalists."
                />
                <GiftCard
                  image={musical}
                  bgColor={"bg-success text-white"}
                  title="Musical"
                  definition="A keen ear and sense of rhythm."
                  description="These children possess an innate sensitivity toward the musical elements of melody, tone, and rhythm. Many professional musicians first demonstrated musical potential at a very early age."
                />
                <GiftCard
                  image={spatial}
                  bgColor={"bg-danger text-white"}
                  title="Spatial"
                  definition="The ability to perceive and transform things visually."
                  description={`Thinking in three dimensional terms, these children see things clearly in the mind’s eye, and can manipulate things with their imaginations. Future mechanics artists, designers, and surgeons.`}
                />
                <GiftCard
                  image={bodily}
                  bgColor={"bg-info text-dark"}
                  title="Bodily-Kinestetic"
                  definition="Using one's body with grace or agility"
                  description="Kinesthetically gifted children are gifted with fine-motor skills used for sewing, crafts, typing, drawing and fixing machinery. Future athletes, dancers, swimmers,inventors and actors."
                />
                <GiftCard
                  image={interpersonal}
                  bgColor={"bg-primary"}
                  title="Interpersonal"
                  definition="Adept at understanding others."
                  description="The ability to empathize, understand and communicate with other people. These children have an uncanny sense of saying or doing the right thing at just the right time. Future teachers, therapists, and counselors."
                />
                <GiftCard
                  image={intrapersonal}
                  bgColor={"bg-warning text-dark"}
                  title="Intrapersonal"
                  definition="Having deep insight into oneself."
                  description="Children who recognize their own strengths and weaknesses. The ability to detect and to symbolize complex and highly differentiated sets of feelings. Future writers, poets, and philosophers."
                />
                <GiftCard
                  image={leadership}
                  bgColor={"bg-success text-white"}
                  title="Leadership"
                  definition="Guiding others through love and service"
                  description="We believe this gift is God-given. Students are encouraged and taught how to serve others. Future teachers, pastors, presidents, and politicians."
                />
                <GiftCard
                  image={creationist}
                  bgColor={"bg-danger text-white"}
                  title="Creationist"
                  definition="Comprehension and love of God’s creation"
                  description="The creationist intelligence is connected to the cosmos and the belief in the truthful narrative of the creation of God. Future farmers, scientists, and geologists."
                />
                <GiftCard
                  image={moral}
                  bgColor={"bg-info text-dark"}
                  title="Moral Intelligence"
                  definition="Having a desire to live ethically."
                  description="Children who have a heart attitude and desire to conscientiously seek truth and justice. They are able to delay self-gratification and make good decisions."
                />
              </Row>
            </Marquee>
          </div>
        </div>

        {/* <Row className="justify-content-center">
          <GiftCard
            image={linguistic}
            bgColor={"bg-primary text-white"}
            title="Linguistic"
            definition="Having the ability to use words effectively."
            description="A student with this gift will show great skill with written and/or spoken language. Political leaders, legal experts and writers have developed this ability to a high degree."
          />
          <GiftCard
            image={logical}
            bgColor={"bg-warning text-dark"}
            title="Logical-Mathematical"
            definition="Having the ability to reason well."
            description="A child with this ability is interested in patterns and relationships among things and loves puzzles and brainteasers. Computer and financial specialists are especially gifted logically and mathematically."
          />
          <GiftCard
            image={musical}
            bgColor={"bg-success text-white"}
            title="Musical"
            definition="Having a keen ear and sense of rhythm."
            description="Musically gifted children frequently sing, hum or whistle because they possess an innate sensitivity toward the musical elements of melody, tone, and rhythm. Many professional musicians first demonstrated musical potential at a very early age."
          />
          <GiftCard
            image={spatial}
            bgColor={"bg-danger text-white"}
            title="Spatial"
            definition="
            Spatial
            Having the ability to perceive and transform things visually."
            description={`Children who are spatially oriented think in three dimensional terms. They not only “see” things clearly i the mind’s eye, but they can manipulate them in their imaginations. These children are mechanics artists, designers, surgeons, mechanics and scientific theorists.`}
          />
          <GiftCard
            image={bodily}
            bgColor={"bg-info text-dark"}
            title="Bodily-Kinestetic"
            definition="Having grace or agility, using one’s body in a highly-skilled way."
            description="Kinesthetically gifted children are gifted with fine-motor skills used for sewing, crafts, typing, drawing and fixing machinery. Future athletes, dancers, swimmers, and sometimes inventors or actor are among this group."
          />

          <GiftCard
            image={interpersonal}
            bgColor={"bg-primary"}
            title="Interpersonal"
            definition="Being gifted at understanding others."
            description="Children gifted with interpersonal skills have the ability to empathize and understand other people. They have the uncanny sense of saying or doing the right thing at just the right time. People in service professions such as teachers, therapists, and counselors exhibit this gift."
          />
          <GiftCard
            image={intrapersonal}
            bgColor={"bg-warning text-dark"}
            title="Intrapersonal"
            definition="Being gifted at understanding others."
            description="Children gifted with interpersonal skills have the ability to empathize and understand other people. They have the uncanny sense of saying or doing the right thing at just the right time. People in service professions such as teachers, therapists, and counselors exhibit this gift."
          />
          <GiftCard
            image={leadership}
            bgColor={"bg-success text-white"}
            title="Leadership"
            definition="Having the ability to take people where they would not go alone, love them and serve them."
            description="We believe this gift is God-given. The school’s staff readily embraces those students who have this intelligence. The students are encouraged and taught how to serve others. Teachers, pastors, presidents, and politicians exhibit this gift."
          />
          <GiftCard
            image={creationist}
            bgColor={"bg-danger text-white"}
            title="Creationist"
            definition="Having the faith to comprehend and love God’s creation a s a gift to mankind to prove His Existence."
            description="The creationist intelligence is connected to the cosmos and the belief in the truthful narrative of the creation of God. The student will absorb the truth of everything taught about the cosmos. Future farmers, scientists, and geologist often display the characteristics of this gift."
          />
          <GiftCard
            image={moral}
            bgColor={"bg-info text-dark"}
            title="Moral Intelligence"
            definition="Having a desire to live ethically."
            description="Children who have a heart attitude and desire to conscientiously seek truth and justice are gifted with moral skills. They are able to delay self-gratification and make good decisions. Moral intelligence is the foundation upon which the gifts must be nurtured and developed."
          />
        </Row> */}
      </div>
    </section>
  );
};

export default GiftProgram;
