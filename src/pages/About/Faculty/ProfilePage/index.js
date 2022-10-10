import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.scss";
import Marquee from "react-fast-marquee";

import { Container, Row, Col, Spinner } from "react-bootstrap";

const ProfilePage = () => {
  const [staff, setStaff] = useState(null);
  const { id } = useParams();

  //ID IS CURRENTLY THE EMAIL ADDRESS, WILL EVENTUALLY CHANGE TO INTEGER ID NUMBER

  //https://tabernacle-school-strapi.herokuapp.com/api

  // const BASE_URL = "http://localhost:1337";
  const BASE_URL = "https://tabernacle-backend.herokuapp.com";

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
      <div className="loading-screen text-center">
        <Spinner animation="border" variant="primary" />
        <div className="text-center fs-4 loading-text text-primary">
          Loading Profile Page
        </div>
      </div>
    );

  console.log(staff);

  const { description, name, title_long, photos, profile_picture, email } =
    staff.data.data[0].attributes;

  console.log(staff.data.data[0].attributes);

  const profile_picture_url = profile_picture.data.attributes.url;

  console.log(typeof description);

  return (
    <>
      <section className="py-5 bg-light text-center">
        <h2 className="text-center display-3">{title_long}</h2>

        <hr className="section-hr my-3" />
        <a href={`mailto:${email}`} className="lead fs-4">
          {email}
        </a>
      </section>

      <section className="pb-5">
        <Container className="py-5">
          <h2 className="display-5 mb-5 text-center">{name}</h2>

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
