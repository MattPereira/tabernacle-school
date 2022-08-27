import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.scss";
import Marquee from "react-fast-marquee";

import { Container, Row, Col, Spinner } from "react-bootstrap";

const ProfilePage = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [staff, setStaff] = useState(null);
  const { id } = useParams();

  //ID IS CURRENTLY THE EMAIL ADDRESS, WILL EVENTUALLY CHANGE TO ID INTEGER

  //https://tabernacle-school-strapi.herokuapp.com/api

  // const BASE_URL = "http://localhost:1337";
  const BASE_URL = "https://ts-strapi.herokuapp.com";

  useEffect(
    function getAllStaff() {
      async function getStaff() {
        setStaff(
          await axios.get(
            `${BASE_URL}/api/staff-members?filters[email][$eqi]=${id}&populate=%2A`
          )
        );
      }
      getStaff();
    },
    [id]
  );

  // Handles waiting for the async response from the API call
  if (!staff)
    return (
      <div className="loading-screen">
        <Spinner animation="border" variant="primary" />
      </div>
    );

  console.log(staff);

  const { description, name, title_long, photos, profile_picture } =
    staff.data.data[0].attributes;

  const profile_picture_url = profile_picture.data.attributes.url;

  console.log(typeof description);

  return (
    <>
      <section className="py-5 bg-light">
        <h2 className="display-3 text-center">{name}</h2>
        <hr className="section-hr my-3" />
        <h3 className="display-5 text-center text-primary">{title_long}</h3>
      </section>

      <section className="py-5">
        <Container className="py-5">
          <Row className="align-items-center mb-5">
            <Col xl={6} className="text-center mb-5 mb-xl-0">
              <img
                src={`${profile_picture_url}`}
                alt="profile pic"
                className="img-fluid img-crop rounded-circle"
              />
            </Col>
            <Col xl={6}>
              <p className="lead">{description}</p>
            </Col>
          </Row>
          {photos.data ? (
            <div className="py-5">
              <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
              >
                {photos.data.map((photo, idx) => (
                  <img
                    src={`${photo.attributes.url}`}
                    alt={`${name} carousel pic ${idx}`}
                    className="img-fluid img-faculty-carousel"
                    key={idx}
                  />
                ))}
              </Marquee>
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
};

export default ProfilePage;
