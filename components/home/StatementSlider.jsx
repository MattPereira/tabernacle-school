"use client";
import { SectionWrapper } from "../common";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const STATEMENTS = [
  {
    title: "Mission",
    text: "Teaching in all areas of life, the Truth, as centered in the Lord Jesus of the Bible.",
  },
  {
    title: "Vision",
    text: "To see children grow up and reach their full potential by providing an environment that allows students to blossom as unique individuals created in the image of God.",
  },
  {
    title: "Philosophy",
    text: "All children are gifted, and our responsibility is to help students discover and develop the unique abilities that God has given them.",
  },
];

/**
 * @TODO: figure out fade effect
 * https://swiperjs.com/swiper-api#param-fadeEffect
 */
export function StatementSlider() {
  return (
    <SectionWrapper classNames="text-center h-64 flex flex-col justify-center">
      <Swiper
        loop
        autoplay={{ delay: 5000 }}
        modules={[Autoplay]}
        // effect="fade"
        // fadeEffect={{ crossFade: true }}
      >
        {STATEMENTS.map((statement, idx) => (
          <SwiperSlide key={idx}>
            <h4 className="font-copse text-2xl md:text-3xl">
              {statement.title}
            </h4>
            <p className="font-gothic text-xl">{statement.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapper>
  );
}
