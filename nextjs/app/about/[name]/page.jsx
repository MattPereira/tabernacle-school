// "use client";
import { SectionWrapper } from "@/components/common";
/**
 * Fetches data server side
 * https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch
 */
async function getStaffMemberData(name) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/staff-members?filters[email][$eqi]=${name}@tbs.org&populate=*`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

/**
 * Page component that is rendered on the client side
 */
export default async function Page({ params }) {
  const response = await getStaffMemberData(params.name);

  const { description, name, title_long, photos, profile_picture, email } =
    response.data[0].attributes;

  const profile_picture_url = profile_picture.data.attributes.url;

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
                <img
                  className="w-full h-full object-cover object-center"
                  src={`${profile_picture_url}`}
                  alt="profile picture"
                />
              </div>
            </div>
            <div className="col-span-5">
              <p className="text-xl">{description}</p>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {photos.data && (
        <div className="mb-20 px-5">
          <div className="carousel carousel-center rounded-box">
            {photos.data.map((photo, idx) => (
              <div key={idx} className="carousel-item">
                <img src={`${photo.attributes.url}`} className="h-96" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
