/**
 * tailwind class "inset-0" provides full coverage of parent component
 */

const Showcase = ({ title, image }) => {
  console.log("image", image);
  return (
    <div
      className={`relative flex justify-center items-center h-[175px] sm:h-[225px] md:h-[275px]`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10">
        <h1 className="text-white font-montserrat uppercase font-bold text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Showcase;
