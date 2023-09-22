import SectionTitle from "../../components/SectionTitle";
import SectionWrapper from "../../components/SectionWrapper";

import athleticsImg from "../../assets/images/campus/athletics.jpg";

export default function Athletics() {
  return (
    <SectionWrapper>
      <SectionTitle title="Athletics" />

      <div className="mb-10 lg:mb-20">
        <p className="text-xl text-center">
          The focus behind the athletic program at Tabernacle is to instill
          Christ-centered character traits within the lives of our student
          athletes. While the program includes training to enhance the ability
          of the student and education to develop a better understanding of
          sports, at the end of each day, we strive to glorify Him in all that
          we do.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="mb-10">
            <h5 className="text-2xl font-bold text-center mb-3">
              Physical Education
            </h5>
            <p className="text-xl">
              Tabernacle provides Physical Education daily to Kindergarten
              through Eighth grade students. Our program gets students moving
              while introducing them to different sports and other physical
              activities. Special events include the Punt, Pass, and Kick
              competition and Track and Field Day.
            </p>
          </div>

          <div>
            <h5 className="text-2xl font-bold text-center">Sports Programs</h5>
            <p className="text-xl">
              Tabernacle offers sports programs for boys and girls in junior
              high. Tryout information, practice days and the league schedule
              can be found on our sports calendar.The Tigers are part of the Bay
              Area Christian School Athletic League. For more information on
              BACSAL visit <a href="bascal.org">bacsal.org</a>.
            </p>
          </div>
        </div>
        <div>
          <img
            src={athleticsImg}
            className="w-full rounded-xl h-96 object-cover"
            alt="Child running on track"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
