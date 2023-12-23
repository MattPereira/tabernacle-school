import { SectionTitle, SectionWrapper } from "@/components/common";

const historyItems = [
  {
    title: "Founding",
    description: `In 1989 our Founder, Margaret Bridges, felt God’s call to establish
      Christian Schools in parts of the world that were previously
      unreachable. Tabernacle School has partnered with several schools
      overseas to help spread the good news of Jesus, and we continue to
      identify opportunities to impact our world.`,
  },
  {
    title: "Restructuring",
    description: `The school and church separated operations in 1996 and have continued
      to share use of the Tabernacle Church property. At the beginning of
      the 2009 school year, Mrs. Bridges retired from daily school services.
      We are grateful for the impact she has made as the Founder of
      Tabernacle School, and we continue to honor her vision and her love
      for children. A management team was formed to oversee the day-to-day
      operations of the school, while the school board continues to be
      responsible for Tabernacle's vision, mission and finances.`,
  },
  {
    title: "Present Day",
    description: `Tabernacle School has flourished under our current leadership team. We
      are continuing to look for ways to improve our campus through the use
      of technology and the integration of teaching methods based on our
      philosophy of multiple intelligences. Each year we strive for
      excellence in education while fostering a loving family atmosphere
      where children grow and thrive.`,
  },
];

export default function History() {
  return (
    <SectionWrapper classNames="">
      <SectionTitle title="History" />

      {historyItems.map((item, index) => (
        <div className="mb-6" key={item.title}>
          <h5 className="font-gothic font-bold text-2xl text-center md:text-start mb-2">
            {item.title}
          </h5>
          <p className="text-xl font-gothic">{item.description}</p>
        </div>
      ))}
    </SectionWrapper>
  );
}
