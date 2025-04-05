"use client";
import { SectionTitle, SectionWrapper, ButtonGroup } from "@/components/common";
import { useState } from "react";
import Image from "next/image";

const gifts = {
  Linguistic: {
    title: "Linguistic",
    image: "/about/gift/linguistic.jpg",
    bgColor: "#0066CC",
    definition: "The ability to use words effectively",
    description:
      "A student with this gift will show great skill with written and/or spoken language. Political leaders, legal experts and writers have developed this ability to a high degree.",
  },
  Logical: {
    title: "Logical",
    image: "/about/gift/logical.jpg",
    bgColor: "#D91E18",
    definition: "The ability to use reason well",
    description:
      "A child with this ability is interested in patterns and relationships among things and loves puzzles and brainteasers. Future technology and financial specalists.",
  },
  Musical: {
    title: "Musical",
    image: "/about/gift/musical.jpg",
    bgColor: "#196F3D",
    definition: "A keen ear and sense of rhythm",
    description:
      "These children possess an innate sensitivity toward the musical elements of melody, tone, and rhythm. Many professional musicians first demonstrated musical potential at a very early age.",
  },
  Spatial: {
    title: "Spatial",
    image: "/about/gift/spatial.jpg",
    bgColor: "#D4AC0D",
    definition: "The ability to perceive and transform things visually",
    description:
      "Thinking in three dimensional terms, these children see things clearly in the mind’s eye, and can manipulate things with their imaginations. Future mechanics artists, designers, and surgeons.",
  },
  Kinesthetic: {
    title: "Kinesthetic",
    image: "/about/gift/bodily.jpg",
    bgColor: "#0066CC",
    definition: "Using one's body with grace or agility",
    description:
      "Kinesthetically gifted children are gifted with fine-motor skills used for sewing, crafts, typing, drawing and fixing machinery. Future athletes, dancers, swimmers,inventors and actors.",
  },
  Interpersonal: {
    title: "Interpersonal",
    image: "/about/gift/interpersonal.jpg",
    bgColor: "#D91E18",
    definition: "Adept at understanding others",
    description:
      "The ability to empathize, understand and communicate with other people. These children have an uncanny sense of saying or doing the right thing at just the right time. Future teachers, therapists, and counselors",
  },
  Intrapersonal: {
    title: "Intrapersonal",
    image: "/about/gift/intrapersonal.jpg",
    bgColor: "#196F3D",
    definition: "Having deep insight into oneself",
    description:
      "Children who recognize their own strengths and weaknesses. The ability to detect and to symbolize complex and highly differentiated sets of feelings. Future writers, poets, and philosophers.",
  },
  Leadership: {
    title: "Leadership",
    image: "/about/gift/leadership.jpg",
    bgColor: "#D4AC0D",
    definition: "Guiding peers with love and service",
    description:
      "We believe this gift is God-given. Students are encouraged and taught how to serve others. Future teachers, pastors, presidents, and politicians.",
  },
  Creationist: {
    title: "Creationist",
    image: "/about/gift/creationist.jpg",
    bgColor: "#0066CC",
    definition: "Comprehension and love of God’s creation",
    description:
      "The creationist intelligence is connected to the cosmos and the belief in the truthful narrative of the creation of God. Future farmers, scientists, and geologists.",
  },
  Moral: {
    title: "Moral",
    image: "/about/gift/moral.jpg",
    bgColor: "#D91E18",
    definition: "Having a desire to live ethically",
    description:
      "Children who have a heart attitude and desire to conscientiously seek truth and justice. They are able to delay self-gratification and make good decisions.",
  },
};

export default function GiftProgram() {
  const [selection, setSelection] = useState(null);

  const giftOptions = Object.keys(gifts);
  return (
    <SectionWrapper classNames="bg-alternate">
      <SectionTitle title="Gift Program" />

      <div>
        <p className="text-xl mb-14">
          At Tabernacle we believe every child is a gifted child, and we respect
          the unique giftedness of all children by working to help them discover
          and develop their gifts. Because children are gifted in different
          ways, we offer a broad range of programs designed to help them develop
          their own unique strengths. We respect and work to develop the
          following universally recognized areas of giftedness.
        </p>
      </div>

      {selection ? (
        <div>
          <div className="flex flex-wrap md:flex-nowrap gap-10">
            <div className="w-full h-72 md:h-96 mx-auto rounded-xl overflow-hidden">
              <Image
                width={500}
                height={500}
                className="w-full h-full object-center object-cover"
                src={gifts[selection].image}
                alt={gifts[selection].title}
              />
            </div>
            <div className="">
              <h5 className="text-3xl font-bold mb-10">{selection}</h5>
              <p className="text-xl font-bold">{gifts[selection].definition}</p>
              <p className="text-xl">{gifts[selection].description}</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <button
              className="btn btn-outline btn-primary text-xl capitalize font-normal"
              onClick={() => setSelection(null)}
            >
              see all gifts
            </button>
          </div>
        </div>
      ) : (
        <ButtonGroup
          classNames="bg-white"
          options={giftOptions}
          setSelection={setSelection}
        />
      )}
    </SectionWrapper>
  );
}
