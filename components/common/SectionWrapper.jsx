export function SectionWrapper({ children, classNames, ...props }) {
  return (
    <div className={`py-14 md:py-20 ${classNames ? classNames : ""}`}>
      <div className="container px-4 xl:px-44 mx-auto">{children}</div>
    </div>
  );
}
