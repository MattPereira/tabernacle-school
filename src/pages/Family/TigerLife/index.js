import orientation from "../../../assets/images/family/orientation.jpg";

import { Link } from "react-router-dom";

const TigerLife = () => {
  return (
    <section id="Tiger" className="py-5 text-center">
      <h2 className="display-2 pt-5">Tiger Life</h2>
      <hr className="section-hr mb-4" />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-xl-3">
            <Link
              to="/family/orientation_video"
              className="text-decoration-none link-dark"
            >
              <img
                src={orientation}
                className="img-fluid center-crop rounded-circle mb-3"
                alt=""
              />
              <h3 className="p-2 mx-5 mx-sm-0 rounded-pill mb-4">
                Orientation Video
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TigerLife;
