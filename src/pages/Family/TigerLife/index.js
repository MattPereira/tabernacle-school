import orientation from "../../../assets/images/family/orientation.jpg";

import { Link } from "react-router-dom";

import SectionTitle from "../../../common/SectionTitle";
import { Container, Box } from "@mui/material";

const TigerLife = () => {
  return (
    <section id="Tiger" className="py-5 text-center">
      <Container>
        <SectionTitle title="Tiger Life" />

        <div className="row justify-content-center">
          <div className="col-xl-3">
            <Link
              to="/family/orientation_video"
              className="text-decoration-none link-dark"
            >
              <Box
                component="img"
                src={orientation}
                sx={{ width: "100%" }}
                alt=""
              />
              <h3 className="p-2 mx-5 mx-sm-0 rounded-pill mb-4">
                Orientation Video
              </h3>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TigerLife;
