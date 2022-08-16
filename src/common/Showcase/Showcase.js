import "./Showcase.scss";

const Showcase = ({ title }) => {
  return (
    <section
      id={`${title.toLowerCase()}-showcase`}
      className="d-flex justify-content-center align-items-center showcase"
    >
      <div className="showcase-overlay"></div>
      <div className="showcase-header">
        <h1 className="display-1 text-white">{title}</h1>
      </div>
    </section>
  );
};

export default Showcase;
