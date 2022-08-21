import orientation from "../../../assets/images/family/orientation.jpg";

import { Link } from "react-router-dom";

const TigerLife = () => {
  return (
    <section id="Tiger" class="py-5 text-center">
      <h2 class="display-2 pt-5">Tiger Life</h2>
      <hr class="section-hr mb-4" />
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-xl-3">
            <Link
              to="/family/orientation_video"
              className="text-decoration-none link-dark"
            >
              <img
                src={orientation}
                class="img-fluid center-crop rounded-circle mb-3"
                alt=""
              />
              <h3 class="p-2 mx-5 mx-sm-0 rounded-pill mb-4">
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
