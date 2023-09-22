// External Imports
import { useState, useEffect } from "react";
import axios from "axios";

import {
  LoadingSpinner,
  SectionTitle,
  SectionWrapper,
  Select,
} from "../../components";

export default function Facilities() {
  const [categoryList, setCategoryList] = useState(null);
  const [selection, setSelection] = useState("Track and Field");
  const [facility, setFacility] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  const handleChange = (event) => {
    setSelection(event.target.value);
    setFacility(null);
  };

  useEffect(() => {
    async function getPhotos() {
      try {
        const categoryData = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/facilities`
        );

        const list = categoryData.data.data.map(
          (category) => category.attributes.name
        );

        setCategoryList(list);

        const response = await axios.get(
          `${
            import.meta.env.VITE_BASE_URL
          }/api/facilities?filters[name][$eqi]=${selection}&populate=*`
        );

        setFacility(response.data.data[0].attributes);
      } catch (error) {
        console.log(error);
      }
    }
    getPhotos();
  }, [selection]);

  if (!categoryList) return <LoadingSpinner />;

  return (
    <SectionWrapper>
      <SectionTitle title="Facilities" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center mb-12">
        <div>
          <p className="text-xl text-center lg:text-start">
            Tabernacle school is committed to maintaining and improving campus
            infrastructure for the benefit of our students.
          </p>
        </div>
        <div className="w-full">
          <Select
            label="Pick a category"
            handleChange={handleChange}
            defaultValue={selection}
            options={categoryList.map((category) => {
              return { value: category, label: category };
            })}
          />
        </div>
      </div>

      {facility ? (
        <>
          <p className="text-xl mb-5"></p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {facility.photos.data.map((photo) => {
              const { url, caption } = photo.attributes;
              return (
                <div key={url}>
                  <img
                    onClick={() => {
                      document.getElementById("my_modal_2").showModal();
                      setExpandedImage(url);
                    }}
                    src={url}
                    className="object-cover h-28 sm:h-32 md:h-48 lg:h-60 rounded-xl cursor-pointer w-full"
                  />
                  {/* <p className="text-xl">{caption}</p> */}
                </div>
              );
            })}
          </div>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box w-full max-w-6xl">
              <img src={expandedImage} className="object-cover h-full w-full" />
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </SectionWrapper>
  );
}
