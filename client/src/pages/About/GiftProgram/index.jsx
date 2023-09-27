import { SectionTitle, SectionWrapper } from "../../../components";

import bodily from "../../../assets/images/about/gift/bodily.jpg";
import linguistic from "../../../assets/images/about/gift/linguistic.jpg";
import interpersonal from "../../../assets/images/about/gift/interpersonal.jpg";
import intrapersonal from "../../../assets/images/about/gift/intrapersonal.jpg";
import logical from "../../../assets/images/about/gift/logical.jpg";
import musical from "../../../assets/images/about/gift/musical.jpg";
import spatial from "../../../assets/images/about/gift/spatial.jpg";
import leadership from "../../../assets/images/about/gift/leadership.jpg";
import creationist from "../../../assets/images/about/gift/creationist.jpg";
import moral from "../../../assets/images/about/gift/moral.jpg";

const giftList = [
  {
    title: "Linguistic",
    image: linguistic,
    bgColor: "#0066CC",
    definition: "The ability to use words effectively",
    description:
      "A student with this gift will show great skill with written and/or spoken language. Political leaders, legal experts and writers have developed this ability to a high degree.",
  },
  {
    title: "Logical",
    image: logical,
    bgColor: "#D91E18",
    definition: "The ability to use reason well",
    description:
      "A child with this ability is interested in patterns and relationships among things and loves puzzles and brainteasers. Future technology and financial specalists.",
  },
  {
    title: "Musical",
    image: musical,
    bgColor: "#196F3D",
    definition: "A keen ear and sense of rhythm",
    description:
      "These children possess an innate sensitivity toward the musical elements of melody, tone, and rhythm. Many professional musicians first demonstrated musical potential at a very early age.",
  },
  {
    title: "Spatial",
    image: spatial,
    bgColor: "#D4AC0D",
    definition: "The ability to perceive and transform things visually",
    description:
      "Thinking in three dimensional terms, these children see things clearly in the mind’s eye, and can manipulate things with their imaginations. Future mechanics artists, designers, and surgeons.",
  },
  {
    title: "Bodily-Kinesthetic",
    image: bodily,
    bgColor: "#0066CC",
    definition: "Using one's body with grace or agility",
    description:
      "Kinesthetically gifted children are gifted with fine-motor skills used for sewing, crafts, typing, drawing and fixing machinery. Future athletes, dancers, swimmers,inventors and actors.",
  },
  {
    title: "Interpersonal",
    image: interpersonal,
    bgColor: "#D91E18",
    definition: "Adept at understanding others",
    description:
      "The ability to empathize, understand and communicate with other people. These children have an uncanny sense of saying or doing the right thing at just the right time. Future teachers, therapists, and counselors",
  },
  {
    title: "Intrapersonal",
    image: intrapersonal,
    bgColor: "#196F3D",
    definition: "Having deep insight into oneself",
    description:
      "Children who recognize their own strengths and weaknesses. The ability to detect and to symbolize complex and highly differentiated sets of feelings. Future writers, poets, and philosophers.",
  },
  {
    title: "Leadership",
    image: leadership,
    bgColor: "#D4AC0D",
    definition: "Guiding peers with love and service",
    description:
      "We believe this gift is God-given. Students are encouraged and taught how to serve others. Future teachers, pastors, presidents, and politicians.",
  },
  {
    title: "Creationist",
    image: creationist,
    bgColor: "#0066CC",
    definition: "Comprehension and love of God’s creation",
    description:
      "The creationist intelligence is connected to the cosmos and the belief in the truthful narrative of the creation of God. Future farmers, scientists, and geologists.",
  },
  {
    title: "Moral Intelligence",
    image: moral,
    bgColor: "#D91E18",
    definition: "Having a desire to live ethically",
    description:
      "Children who have a heart attitude and desire to conscientiously seek truth and justice. They are able to delay self-gratification and make good decisions.",
  },
];

export default function GiftProgram() {
  return (
    <SectionWrapper classNames="bg-alternate">
      <SectionTitle title="Gift Program" />

      <div>
        <p className="text-xl mb-20">
          At Tabernacle we believe every child is a gifted child, and we respect
          the unique giftedness of all children by working to help them discover
          and develop their gifts. Because children are gifted in different
          ways, we offer a broad range of programs designed to help them develop
          their own unique strengths. We respect and work to develop the
          following universally recognized areas of giftedness.
        </p>
      </div>

      {giftList.map((gift) => (
        <div key={gift.title} className="collapse collapse-plus bg-white mb-3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-2xl">{gift.title}</div>
          <div className="collapse-content">
            <GiftCard
              image={gift.image}
              bgColor={gift.bgColor}
              title={gift.title}
              definition={gift.definition}
              description={gift.description}
            />
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}

function GiftCard({ image, title, definition, description, bgColor }) {
  return (
    <div>
      <div className="grid cols-1 lg:grid-cols-8 gap-8">
        <div className="w-full h-[250px] rounded-xl overflow-hidden col-span-8 lg:col-span-3">
          <img
            className="w-full h-full object-center object-cover"
            component="img"
            src={image}
            alt={title}
          />
        </div>
        <div className="col-span-8 lg:col-span-5">
          <p className="text-xl font-bold">{definition}</p>
          <p className="text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
}
