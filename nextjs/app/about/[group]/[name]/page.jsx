import { SectionWrapper } from "@/components/common";
import facultyDataJson from "@/data/faculty.json";

/**
 * Faculty person's profile page
 */
export default async function ProfilePage({ params }) {
  const { description, name, images, email } = facultyDataJson[
    params.group
  ].staff.find((person) => person.email === params.name + "@tbs.org");

  return (
    <div>
      <div>
        <SectionWrapper>
          <div className="text-center mb-20">
            <h2 className="font-copse text-5xl mb-3">{name}</h2>
            <a
              className="text-xl text-primary underline"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-8 items-center">
            <div className="col-span-3">
              <div className="rounded-xl overflow-hidden h-[275px] w-[275px] mx-auto mb-10 lg:mb-0">
                {images?.profile && (
                  <img
                    className="w-full h-full object-cover object-center"
                    src={`${images.profile}`}
                    alt="profile picture"
                  />
                )}
              </div>
            </div>
            <div className="col-span-5">
              <p className="text-xl">{description}</p>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {images?.gallery && (
        <div className="mb-20 px-7">
          <div className="carousel rounded-box">
            {images.gallery.map((image, idx) => (
              <div key={idx} className="carousel-item">
                <img src={`${image}`} className="h-96" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
