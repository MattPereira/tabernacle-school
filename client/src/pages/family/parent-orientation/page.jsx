import { Link } from "react-router-dom";
import { SectionWrapper, SectionTitle } from "../../../components";
import { Table, TableHead, TableRow } from "../../../components/Table";

export default function ParentOrientation() {
  return (
    <SectionWrapper>
      <SectionTitle title="Parent Orientation" />
      <h5 className="text-center text-3xl mb-10">August 7th, 2023</h5>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
        <div>
          <p className="text-xl">
            We are excited to have you back on campus for the 2023-2024 school
            year. No children on campus on parent orientation day please.
            Meetings will take place in your child's classrooms. Please see the
            slideshow below for highlighted information for the school year. For
            more information please see the{" "}
            <Link to="/family">family page</Link>
          </p>
        </div>
        <div>
          <Table>
            <TableHead headers={["Time", "Grades"]} />

            <tbody>
              <TableRow data={["10:00 AM", "Kindergarten & TK"]} />
              <TableRow data={["11:00 AM", "1st - 2nd Grades"]} />
              <TableRow data={["1:00 PM", "3rd - 5th Grades"]} />
              <TableRow data={["2:00 PM", "6th - 8th Grades"]} />
            </tbody>
          </Table>
        </div>
      </div>
      <div className="my-10 text-center">
        <a
          className="btn btn-primary capitalize btn-md text-xl"
          variant="contained"
          href="/pdfs/information/parent-orientation.pdf"
          target="_blank"
          sx={{ borderRadius: "30px", px: 3 }}
        >
          See Slideshow
        </a>
      </div>
      <div className="hidden lg:block">
        <iframe
          title="orientation"
          src="/pdfs/information/parent-orientation.pdf"
          width="100%"
          height="800px"
        ></iframe>
      </div>
    </SectionWrapper>
  );
}
