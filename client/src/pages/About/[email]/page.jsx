import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LoadingSpinner, SectionWrapper } from "../../../components";

const ProfilePage = () => {
  const [staff, setStaff] = useState(null);
  const { id } = useParams();

  useEffect(
    function getAllStaff() {
      async function getStaff() {
        setStaff(
          await axios.get(
            `${
              import.meta.env.VITE_BASE_URL
            }/api/staff-members?filters[email][$eqi]=${id}&populate=%2A`
          )
        );
      }
      getStaff();
    },
    [id]
  );

  // Handles waiting for the async response from the API call
  if (!staff) return <LoadingSpinner />;

  const { description, name, title_long, photos, profile_picture, email } =
    staff.data.data[0].attributes;

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
              <div className="rounded-full overflow-hidden h-[275px] w-[275px] mx-auto mb-10 lg:mb-0">
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
              <div className="carousel-item">
                <img src={`${photo.attributes.url}`} className="h-96" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
