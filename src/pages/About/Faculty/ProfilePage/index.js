import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Container, Row, Col, Spinner } from "react-bootstrap";

const ProfilePage = () => {
  const [staff, setStaff] = useState(null);

  const { id } = useParams();

  //ID IS CURRENTLY THE EMAIL ADDRESS, WILL EVENTUALLY CHANGE TO ID INTEGER

  useEffect(
    function getAllStaff() {
      async function getStaff() {
        setStaff(
          await axios.get(
            `http://localhost:1337/api/staff-members?filters[email][$eqi]=${id}&populate=%2A`
          )
        );
      }
      getStaff();
    },
    [id]
  );

  //http://localhost:1337/api/staff-members/?populate=%2A?&filters[email][$eqi]=${id}

  // Handles waiting for the async response from the API call
  if (!staff) return <Spinner animation="grow" variant="primary" />;

  console.log(staff);

  const { description, name, title_long, photos, profile_picture } =
    staff.data.data[0].attributes;

  const profile_picture_url = profile_picture.data.attributes.url;

  console.log(photos.data);

  console.log(profile_picture_url);

  return (
    <>
      <section className="py-5 bg-light">
        <h2 class="display-1 text-center">{name}</h2>
        <hr class="section-hr my-3" />
        <h3 class="display-6 text-center text-primary">{title_long}</h3>
      </section>

      <section className="py-5">
        <Container>
          <Row className="align-items-center mb-5">
            <Col md={6} className="text-center">
              <img
                src={`http://localhost:1337${profile_picture_url}`}
                alt="profile pic"
                className="img-fluid "
                style={{ height: "500px" }}
              />
            </Col>
            <Col md={6}>
              <p className="lead">{description}</p>
            </Col>
          </Row>
          <Row>
            {photos.data.map((photo, idx) => (
              <Col md={4} className="text-center mb-3" key={idx}>
                <img
                  src={`http://localhost:1337${photo.attributes.url}`}
                  alt="testing"
                  className="img-fluid"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProfilePage;
