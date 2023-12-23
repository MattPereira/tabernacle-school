"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  SectionTitle,
  SectionWrapper,
  LoadingSpinner,
  ButtonGroup,
} from "@/components/common";

export default function Faculty() {
  const [facultyData, setFacultyData] = useState(null);
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    async function getFacultyData() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/staff-groups?populate[staff_members][populate][0]=profile_picture`
        );

        setFacultyData(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    }

    getFacultyData();
  }, []);

  if (!facultyData) return <LoadingSpinner />;

  facultyData.sort((a, b) => a.id - b.id);
  const facultyOptions = facultyData.map((group) => {
    return group.attributes.name;
  });

  const facultyObj = facultyData.reduce((acc, curr) => {
    acc[curr.attributes.name] = curr.attributes;
    return acc;
  }, {});

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
              {facultyObj[selection].name}
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {facultyObj[selection].staff_members.data.map((member) => {
                const {
                  email,
                  name,
                  profile_picture,
                  title_short: titleShort,
                } = member.attributes;

                const profilePicture = profile_picture.data.attributes.url;
                return (
                  <div key={email}>
                    <Link
                      href={`/about/${email.split("@")[0]}`}
                      className="text-center"
                    >
                      <p className="text-xl mb-1">{titleShort}</p>

                      <div className="w-[150px] h-[150px] object-center rounded-full overflow-hidden mx-auto mb-1">
                        <img
                          className="w-full h-full object-center object-cover"
                          src={profilePicture}
                        />
                      </div>
                      <p className="text-xl">{name}</p>
                    </Link>
                  </div>
                );
              })}
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
