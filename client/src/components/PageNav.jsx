const PageNav = ({ sections }) => {
  return (
    <>
      <div className="py-4 border-b border-[#e0e0e0] overflow-x-auto flex justify-start md:justify-center px-5 gap-7">
        {sections.map((section) => (
          <div key={section}>
            <a
              className="text-xl whitespace-nowrap"
              href={`#${section.split(" ")[0]}`}
            >
              {section}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default PageNav;
