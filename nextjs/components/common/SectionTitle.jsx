export const SectionTitle = ({ title }) => {
  // Weird div is for anchor links on same page

  const anchorId = title.split(" ")[0];
  return (
    <div className="pb-14 lg:pb-20 pt-0">
      <div
        id={anchorId}
        style={{
          display: "block",
          position: "relative",
          top: "-175px",
          visibility: "hidden",
        }}
      ></div>
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-copse">{title}</h2>
      </div>
    </div>
  );
};
