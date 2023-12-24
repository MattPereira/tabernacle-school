"use client";
import { useState } from "react";
import { SectionTitle, SectionWrapper, Select } from "@/components/common";

/**
 *
 * @dev open the modal using document.getElementById('ID').showModal() method
 */
export default function Facilities({ data }) {
  const [selection, setSelection] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);

  return (
    <SectionWrapper>
      <SectionTitle title="Facilities" />
      <div className="mb-5">
        <p className="text-xl">
          Tabernacle school is committed to maintaining and improving campus
          infrastructure for the benefit of our students. Take a virtual tour of
          our campus by choosing a category and selecting a photo to get a
          closer look
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <Select
          label="choose category"
          handleChange={(event) => setSelection(event.target.value)}
          defaultValue={selection}
          options={data.map((category, idx) => {
            return {
              value: idx,
              label: category.attributes.name,
            };
          })}
        />
      </div>

      <>
        <p className="text-xl mb-5"></p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {data[selection].attributes.photos.data.map((photo) => {
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
              </div>
            );
          })}
        </div>

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box w-full max-w-6xl">
            <img src={expandedImage} className="object-cover h-full w-full" />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </>
    </SectionWrapper>
  );
}
