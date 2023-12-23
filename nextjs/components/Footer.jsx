import { HashLink } from "../components/HashLink";
import { SectionWrapper } from "../components";

const rectangleButtonStyles =
  "border-white text-white py-4 border-2 text-xl rounded-xl hover:bg-accent hover:border-accent uppercase font-bold text-center";

const circleButtonStyles =
  "border border-white rounded-full h-14 w-14 flex items-center justify-center hover:bg-accent hover:border-accent";

const Footer = () => {
  return (
    <>
      <div
        className="py-14 md:py-20"
        style={{
          background: `linear-gradient(rgba(21, 101, 192, 0.65), rgba(21, 101, 192, 0.65)), url(/footer/bg-image.jpg) center / cover no-repeat`,
        }}
      >
        <div className="container px-4 xl:px-44 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <HashLink className={rectangleButtonStyles} href="/connect#Contact">
              Contact
            </HashLink>
            <HashLink
              className={rectangleButtonStyles}
              href="/admissions#Request"
            >
              Visit
            </HashLink>
            <HashLink
              className={rectangleButtonStyles}
              href="/connect#Employment"
            >
              Employment
            </HashLink>
          </div>
        </div>
      </div>
      <SectionWrapper classNames="bg-primary">
        <div className="flex flex-wrap justify-center md:justify-between pb-10 text-primary-content gap-5">
          <div className="text-center md:text-start">
            <h6 className="font-bold text-xl">TABERNACLE CHRISTIAN SCHOOL</h6>
            <div className="text-xl">4380 Concord Blvd</div>
            <div className="text-xl">Concord, CA 94521</div>
            <div className="text-xl mb-3">925.685.9169</div>
            <a
              className="text-accent text-xl font-bold hover:underline"
              href="https://goo.gl/maps/bzszKK9jY9ngSiDE9"
            >
              DIRECTIONS
            </a>
          </div>
          <div>
            <div className="text-accent text-xl font-bold mb-5">
              <em>Love God. Learn for life. Lead like Christ.</em>
            </div>
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                className={circleButtonStyles}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/people/Tabernacle-School/100064024872370/"
              >
                <svg
                  fill="white"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
                </svg>
              </a>
              <a
                className={circleButtonStyles}
                target="_blank"
                rel="noopener noreferrer"
                href="/pdfs/calendar-23-24.pdf"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-t border-white" />
        <div className="flex justify-center md:justify-end">
          <a
            href="https://matt-pereira.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-content mt-5 "
          >
            Website by Matt Pereira
          </a>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Footer;
