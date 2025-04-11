"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SectionTitle, SectionWrapper, ButtonGroup } from "@/components/common";
import facultyDataJson from "@/data/faculty.json";

export default function Faculty() {
  const [selection, setSelection] = useState(null);

  const facultyOptions = Object.keys(facultyDataJson);

  return (
    <SectionWrapper classNames="bg-alternate">
      <SectionTitle title="Faculty" />
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
          <Image
            width={500}
            height={500}
            src="/about/faculty/slide2.jpg"
            className="w-full rounded-xl hidden lg:block"
            alt="Staff members in sunglasses"
          />
          <Image
            width={500}
            height={500}
            src="/about/faculty/slide1.jpg"
            className="w-full rounded-xl"
            alt="Teachers welcome in front of blackboard"
          />
          <Image
            width={500}
            height={500}
            src="/about/faculty/slide3.jpg"
            className="w-full rounded-xl hidden lg:block"
            alt="Teachers in library"
          />
        </div>
        <p className="text-xl text-center mb-10">
          Choose a grade level and select a faculty member to see their profile
          page
        </p>
      </div>
      <div>
        {selection ? (
          <div>
            <h4 className="text-center font-gothic text-4xl mb-10">
              {selection}
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {facultyDataJson[selection].staff.map(
                ({ email, name, images, titleShort }) => {
                  return (
                    <div key={email}>
                      <Link
                        href={`/about/${selection}/${email.split("@")[0]}`}
                        className="text-center"
                      >
                        <p className="text-xl mb-1">{titleShort}</p>
                        <div className="w-[150px] h-[150px] object-center rounded-full overflow-hidden mx-auto mb-1">
                          <img
                            className="w-full h-full object-center object-cover"
                            src={
                              images.profile === ""
                                ? "/defaultProfilePicture.jpg"
                                : images.profile
                            }
                            alt={name}
                          />
                        </div>
                        <p className="text-xl">{name}</p>
                      </Link>
                    </div>
                  );
                }
              )}
            </div>
            <div className="text-center mt-10">
              <button
                className="btn btn-outline btn-primary text-xl capitalize font-normal"
                onClick={() => setSelection(null)}
              >
                Back to categories
              </button>
            </div>
          </div>
        ) : (
          <ButtonGroup
            options={facultyOptions}
            setSelection={setSelection}
            classNames="bg-white"
          />
        )}
      </div>
    </SectionWrapper>
  );
}
