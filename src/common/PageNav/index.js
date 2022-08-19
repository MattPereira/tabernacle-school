import "./index.scss";

const PageNav = ({ sections }) => {
  return (
    <ul
      id="page-nav"
      className="nav nav-pills bg-info d-flex align-items-center justify-content-center d-none d-md-flex py-2"
    >
      {sections.map((section) => (
        <li className="nav-item mx-5" key={section}>
          <a className="btn rounded-pill border-0" href={`#${section}`}>
            {section}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PageNav;
