import {
  SectionTitle,
  SectionWrapper,
  Table,
  TableHead,
  TableRow,
} from "@/components/common";

import Image from "next/image";

export default function Daycare() {
  return (
    <SectionWrapper classNames="bg-alternate">
      <SectionTitle title="Daycare" />

      <div className="mb-20">
        <p className="text-xl text-center">
          Tabernacle daycare is available to any enrolled student age 2 years 9
          months to a graduated eighth grader through August after graduation.
          Our program is child centered. The caring and compassionate staff
          build a family like atmosphere in which your children will thrive.
          Relationships among families, children and staff are the heart of the
          program.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            width={1000}
            height={1000}
            src="/campus/daycare.jpg"
            className="w-full rounded-xl"
          />
        </div>
        <div>
          <div className="mb-5">
            <h5 className="mb-2 text-2xl text-center font-gothic font-bold">
              Hours of Operation
            </h5>

            <Table className="bg-white">
              <TableHead headers={["Type", "Hours", "Days"]} />
              <tbody>
                <TableRow
                  data={["Summer", "6:45 am - 6:00 pm", "Monday - Friday"]}
                />
                <TableRow
                  data={[
                    "Before School",
                    "6:45 am - 8:00 am",
                    "Monday - Friday",
                  ]}
                />
                <TableRow
                  data={[
                    "After School",
                    "3:15 pm – 6:00 pm",
                    "Monday - Friday",
                  ]}
                />
              </tbody>
            </Table>
          </div>
          <div className="mb-5">
            <h5 className="mb-2 text-2xl text-center font-gothic font-bold">
              Rates
            </h5>
            <Table className="bg-white">
              <TableHead headers={["Type", "Rate", "Per"]} />
              <tbody>
                <TableRow data={["Drop-In", "$10", "Hour"]} />
                <TableRow data={["Full-Time Summer", "$700", "Month"]} />
                <TableRow data={["Full-Time School Year", "$200", "Month"]} />
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
