import {
  Table,
  TableHead,
  TableRow,
  SectionWrapper,
  SectionTitle,
} from "@/components/common";

const TUITION_PRICES = [
  {
    title: "Preschool & Transitional Kindergarten",
    annual: 7850,
    pif: 7700,
    monthly: 785,
  },
  { title: "Grades K-5", annual: 7500, pif: 7350, monthly: 750 },
  { title: "Grades 6-8", annual: 7900, monthly: 790 },
];

export default function Tuition() {
  return (
    <SectionWrapper classNames="bg-alternate">
      <SectionTitle title="Tuition & Fees" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="">
          <div className="mb-3">
            <h5 className="text-2xl font-gothic font-bold text-center mb-1">
              2023-24 Tuition
            </h5>
            <div className="border">
              <Table className="bg-white">
                <TableHead
                  headers={["Child", "Annual", "PIF Discount", "Monthly"]}
                />
                {TUITION_PRICES.map((group) => {
                  return (
                    <tbody key={group.title} className="text-center">
                      <tr className="bg-primary text-white">
                        <th
                          colSpan="4"
                          className="text-start px-2 py-2 text-lg"
                        >
                          {group["title"]}
                        </th>
                      </tr>
                      <TableRow
                        data={[
                          "1st",
                          `$${group.annual}`,
                          `$${group.annual - 150}`,
                          `$${group.monthly}`,
                        ]}
                      />
                      <TableRow
                        data={[
                          "2nd",
                          `$${group.annual - 550}`,
                          `$${group.annual - 550 - 150}`,
                          `$${group.monthly - 55}`,
                        ]}
                      />
                      <TableRow
                        data={[
                          "3rd",
                          `$${group.annual - 550}`,
                          `$${group.annual - 550 - 150}`,
                          `$${group.monthly - 55}`,
                        ]}
                      />
                    </tbody>
                  );
                })}
              </Table>
            </div>
            <p className="px-3 text-neutral-700 mt-3 mb-5">
              *Tuition payments begin 8/1/2023 and end 5/1/2024. Payment for PIF
              discount is due by 8/10/2023
            </p>
          </div>
          <h5 className="text-center text-2xl font-gothic font-bold mb-1">
            Annual Fees
          </h5>
          <Table className="bg-white">
            <TableHead headers={["Fee", "Price", "Description"]} />
            <tbody>
              <TableRow
                data={[
                  "Registration",
                  "$100",
                  "Accounts must be current for re-enrolling students and registration fee paid by January 31",
                ]}
              />
              <TableRow
                data={[
                  "Preschool Consumables",
                  "$350",
                  "Fee includes curriculum, emergency kit, yearbook, and craft supplies.",
                ]}
              />
              <TableRow
                data={[
                  "K-8 Consumables",
                  "$375",
                  "Fee includes textbooks, emergency supplies, yearbook, and online resources. Maximum consumable fee per family is $850",
                ]}
              />
            </tbody>
          </Table>

          <p className="px-3 text-neutral-700 px-3 mt-3">
            *Classroom placement is secured upon payment of registration and
            consumable fee and first month's tuition. Registration is
            non-refundable. Consumable fee is non-refundable after May 1st or at
            time of enrollment for new students. First month's tuition is
            non-refundable.
          </p>
        </div>
        <div className="">
          <div className="mb-10">
            <h5 className="text-2xl font-gothic font-bold text-center mb-1">
              Other Fees
            </h5>
            <Table className="bg-white">
              <TableHead headers={["Fee", "Price", "Description"]} />
              <tbody>
                <TableRow data={["Athletic", "$150", "Per sport played"]} />
                <TableRow data={["Tutoring", "$50", "Per hour"]} />
                <TableRow data={["Field Trip", "TBD", "Per trip"]} />
                <TableRow data={["Emergency Lunch", "$7", "Per lunch"]} />
                <TableRow data={["Returned Check", "$30", "Per check"]} />
                <TableRow
                  data={["Academic Assessment", "$50", "For new students only"]}
                />
              </tbody>
            </Table>
          </div>
          <h5 className="text-2xl font-gothic font-bold text-center mb-1">
            Daycare Fees
          </h5>
          <Table className="bg-white">
            <TableHead headers={["Type", "Price", "Description"]} />
            <tbody>
              <TableRow
                data={[
                  "Full Time Daycare",
                  "$200/month",
                  "During School Year (August - May)",
                ]}
              />
              <TableRow
                data={[
                  "FTDC Family Plan (2)",
                  "$350/month",
                  "Two child discount during school year",
                ]}
              />
              <TableRow
                data={[
                  "FTDC Family Plan (3+)",
                  "$425/month",
                  "3+ children discount during school year",
                ]}
              />
              <TableRow
                data={["Full Time Daycare", "$700/month", "Summer Months K-8"]}
              />
              <TableRow
                data={[
                  "Summer Celebration",
                  "$800/month",
                  " Incoming Kindergarteners",
                ]}
              />
              <TableRow
                data={["Joyful Beginnings", "$850/month", "Preschool ages"]}
              />
              <TableRow
                data={[
                  "Hourly Daycare",
                  "$10/hour",
                  "For students not enrolled in FTDC",
                ]}
              />
              <TableRow
                data={["Summer Celebration", "$10/hour", "Available 9-12 am"]}
              />
              <TableRow
                data={["After Hours Daycare", "$1/minute", "After 6:00 pm"]}
              />
            </tbody>
          </Table>
          <p className="px-3 text-neutral-700 mt-3">
            *Daycare is open 6:45AM - 8:00AM and 3:30PM-6:00PM. See school{" "}
            <a href="/campus#calendar">calendar</a> for closures.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
