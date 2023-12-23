import { SectionTitle, SectionWrapper } from "@/components/common";
import Image from "next/image";

export default function Outreach() {
  const outreachPrograms = [
    {
      title: "Friends Feeding Friends",
      description:
        "An outreach ministry that serves the homeless and low income people in our community in loving memory of Sarah Deniston.",
      image: "/campus/friends-feeding.jpg",
      url: "http://gsconcord.com/outreach-ministries/friends-feeding-friends/",
    },
    {
      title: "Thanksgiving Food Drive",
      description:
        "Tabernacle partners with the Food Bank of Contra Costa and Solano during November to collect healthy and nonperishable foods.",
      image: "/campus/thanksgiving-food.jpg",
      url: "https://www.foodbankccs.org/give-help/host-a-drive.html",
    },
    {
      title: "Operation Christmas Child",
      description:
        "Partner with Samaritan's Purse to provide Christmas gifts to children in need around the world.",
      image: "/campus/thanksgiving-food.jpg",
      url: "https://www.samaritanspurse.org/what-we-do/operation-christmas-child/",
    },
  ];

  return (
    <SectionWrapper classNames="bg-alternate">
      <SectionTitle title="Outreach" />
      <p className="text-xl mb-16 text-center">
        Tabernacle school believes in the power of community and the importance
        of giving back. Our outreach initiatives reflect our commitment to
        making a positive impact, both locally and globally. From supporting the
        homeless in our immediate neighborhood to ensuring children worldwide
        receive joy during the holiday season, we take pride in fostering a
        culture of compassion and service. Dive in to learn more about our
        outreach programs and how you can get involved.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        {outreachPrograms.map((program) => (
          <div key={program.title} className="bg-white rounded-xl h-full">
            <div>
              <Image
                width={500}
                height={500}
                src={program.image}
                className="w-full object-cover rounded-2xl h-60 object-center"
                alt=""
              />
            </div>

            <div className="px-5 py-8">
              <div className="mb-3">
                <a rel="noreferrer" href={program.url} target="_blank">
                  <h6 className="text-primary text-xl font-bold underline">
                    {program.title}
                  </h6>
                </a>
              </div>
              <p className="text-xl">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
