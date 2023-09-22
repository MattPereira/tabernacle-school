import { SectionTitle, SectionWrapper } from "../../components";

import googleClassroomImg from "../../assets/images/academics/google-classroom.png";
import ignitiaImg from "../../assets/images/academics/ignitia.png";

export default function DistanceLearning() {
  return (
    <SectionWrapper classNames="bg-alternate">
      <SectionTitle title="Distance Learning" />
      <div className=" mb-16">
        <p className="text-xl">
          In case of a resurgence in Coronavirus cases and potential school
          closure, Tabernacle has implemented a Distance Learning Program using
          Google Classroom. Each student has been assigned to a Google
          classroom. Middle School students engaging in distance learning will
          access their curriculum using Ignitia, a Web-based learning
          environment featuring a media-rich, online curriculum.
        </p>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-around items-stretch gap-10">
        <div className="bg-white rounded-2xl p-5 lg:p-10 w-full md:w-[500px]">
          <div className="flex justify-center mb-12">
            <img
              className="h-60"
              src={googleClassroomImg}
              alt="google classroom icon"
            />
          </div>
          <div>
            <div className="mb-3">
              <a
                className="underline text-blue-600 text-2xl"
                href="https://edu.google.com/workspace-for-education/classroom/"
              >
                Google Classroom
              </a>
            </div>

            <p className="text-xl">
              A blended learning platform developed by Google for educational
              institutions that aims to simplify creating, distributing, and
              grading assignments.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl h-full flex flex-col justify-between p-10 w-full md:w-[500px]">
          <div className="flex justify-center">
            <img className="h-60 lg:h-72" src={ignitiaImg} alt="" />
          </div>
          <div>
            <div className="mb-3">
              <a
                className="underline text-blue-600 text-2xl"
                href="https://tabernacleca.ignitiaschools.com/owsoo/login/auth"
              >
                Ignitia
              </a>
            </div>

            <p className="text-xl">
              A versatile online Christian curriculum and learning management
              system with dynamic, Christ-centered lessons and interactive
              features designed to serve teachers and students.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
