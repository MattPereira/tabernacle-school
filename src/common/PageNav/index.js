import "./index.scss";

const PageNav = ({ sections }) => {
  return (
    <ul
      id="page-nav"
      className="nav nav-pills d-flex align-items-center justify-content-center d-none d-lg-flex py-3"
      style={{ borderBottom: "1px solid #e0e0e0" }}
    >
      {sections.map((section) => (
        <li className="nav-item mx-5" key={section}>
          <a
            className="text-decoration-none text-dark"
            href={`#${section.split(" ")[0]}`}
            style={{
              fontSize: "16px",
              fontFamily: "Montserrat",
              fontWeight: 500,
            }}
          >
            {section}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PageNav;
