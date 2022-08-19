const Information = () => {
  return (
    <section id="footer" className="bg-dark text-white py-5">
      <div className="container py-md-5">
        <div className="row align-items-center text-center justify-content-between">
          <div className="col-md-4 mb-3 mb-md-0 lead">
            <div>
              <a
                className="text-white text-decoration-none"
                href="mailto:info@tbs.org"
              >
                info@tbs.org
              </a>
            </div>
            <div>
              <a
                className="text-white  text-decoration-none"
                href="/employment"
              >
                Employment
              </a>
            </div>
            <div>
              <a
                className="text-white  text-decoration-none"
                href="https://www.facebook.com/Tabernacle-School-145610978797440/"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="col-md-4 lead mb-3 mb-md-0">
            Tabernacle school
            <br></br>
            4380 Concord Blvd
            <br></br>
            Concord, CA 94521
          </div>
          <div className="col-md-4 lead mb-3 mb-md-0">
            (925) 685-9169
            <br></br>
            Monday - Friday
            <br></br>
            6:30AM - 6:30PM
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
