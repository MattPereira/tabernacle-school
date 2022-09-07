import Showcase from "../../../../common/Showcase/Showcase";

import { Container, Row, Col, Table } from "react-bootstrap";

const Discipline = () => {
  return (
    <>
      <Showcase title="Jr High Discipline" />
      <section className="py-5">
        <Container className="py-5">
          <p className="lead mb-5">
            The demerit system is a guide for discipline in the sixth through
            eighth grades at Tabernacle School. The positive side of discipline
            is stressed through our Character Counts program. In order to
            maintain the highest standards of character and academic excellence
            at all times, the administration expects students to abide by
            standards of respectfulness and responsibility. Failure to abide by
            the rules and regulations set forth in the Tabernacle Parent/Student
            Handbook will result in the issuing of demerits or other
            disciplinary actions.
          </p>
          <Row>
            <Col lg={6}>
              <h4 className="fw-bold">Demerit Policy and Procedure</h4>
              <p>
                The goal of our discipline policy is to keep students
                accountable for their behavior and to promote an environment of
                cooperation and learning. A student will receive a demerit for
                any disrespectful, defiant, or irresponsible behavior. Demerits
                accrue each school year from the start of August until the end
                of the school year. If a student receives a demerit then the
                teacher or administrator issuing the demerit will fill out a
                behavior report in FACTS and the parents will be notified of the
                infraction and the number of demerits issued.
              </p>
              <p>
                Demerits serve as a record of a student’s behavior and a
                communication tool for parents to aid in the character
                development of their child. Students will be given various
                amounts of demerits based on the type and severity of the
                behavior. Demerits may be given at the discretion of the
                administration for irregular disciplinary scenarios not covered
                by the list below. Students can be held responsible for their
                actions away from campus, and may be asked to withdraw from
                Tabernacle School at the administration’s request. Demerits may
                be doubled or otherwise increased for successive violations or
                when the offense is deliberate and/or defiant.
              </p>
              <Table bordered>
                <thead>
                  <tr>
                    <th colspan="2" className="text-center table-dark">
                      Levels Of Discipline
                    </th>
                  </tr>
                  <tr className="table-secondary">
                    <th>Demerits</th>
                    <th>Punishment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10</td>
                    <td>
                      One lunch detention for each 10 demerits earned, served
                      the following school day.
                    </td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>
                      One hour after school Thursday detention (3:00 – ­4:00).
                      One week extracurricular suspension.
                    </td>
                  </tr>
                  <tr>
                    <td>40</td>
                    <td>
                      One day out of school suspension. Parent teacher
                      conference with administration, and will be ineligible to
                      participate in Tabernacle extracurricular activities for
                      the remainder of the season. The student will be
                      ineligible to participate in field trips, including the
                      6th grade Wolf Mountain trip.
                    </td>
                  </tr>
                  <tr>
                    <td>60</td>
                    <td>
                      Two day out of school suspension. Immediate
                      disqualification from Tabernacle extracurricular
                      activities for the remainder of the school year. Students
                      who reach 60 or more demerits may not be able to
                      re-­enroll for the upcoming school year at the discretion
                      of the administration.
                    </td>
                  </tr>
                  <tr>
                    <td>80</td>
                    <td>
                      Expulsion from school for the remainder of the school year
                      at the discretion of the administration, possible
                      alternative schooling options.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col lg={6}>
              <Table bordered className="text-center">
                <thead>
                  <tr className="table-dark text-white">
                    <th>Infraction</th>
                    <th>Demerits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Unexcused tardy</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Unprepared for class</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      Leaving books/cinch bags/supplies outside the locker
                    </td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Dress code violation (double after 2nd offense)</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Eating in class</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Chewing gum at school</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Excessive talking</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Passing notes in class or chapel</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Running/disruptive behavior in halls</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Loitering/wandering</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Distruptive behavior</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Disrepectful behavior</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Defiance of authority</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Dishonesty</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Leaving class without permission</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Cell phone usage</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Violation of electronic use policy</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Public display of affection</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Violation of locker contract</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Cheating or appearance of cheating</td>
                    <td>3-10</td>
                  </tr>
                  <tr>
                    <td>Plagiariasm/forgery</td>
                    <td>5-10</td>
                  </tr>
                  <tr>
                    <td>Innapropriate language</td>
                    <td>5-10</td>
                  </tr>
                  <tr>
                    <td>Taunting/teasing</td>
                    <td>5-10</td>
                  </tr>
                  <tr>
                    <td>Slander/gossip</td>
                    <td>5-10</td>
                  </tr>
                  <tr>
                    <td>Obscene jokes</td>
                    <td>5-10</td>
                  </tr>
                  <tr>
                    <td>Hurting another student</td>
                    <td>5-20</td>
                  </tr>
                  <tr>
                    <td>Vandalism</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Sharing passwords</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Stealing</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>Fighting (initiation or participating)</td>
                    <td>20-40</td>
                  </tr>
                  <tr>
                    <td>Sexual harassment</td>
                    <td>20-40</td>
                  </tr>
                  <tr>
                    <td>Verbal harassment</td>
                    <td>20-40</td>
                  </tr>
                  <tr>
                    <td>
                      Possession of firework, matches, lighters, pocket knife
                    </td>
                    <td>20-40</td>
                  </tr>
                  <tr>
                    <td>Possession of pornography</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>Possession of weapon on campus</td>
                    <td>Expulsion</td>
                  </tr>
                  <tr>
                    <td>Possession or distribution of drugs or paraphenalia</td>
                    <td>Expulsion</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>

          <div className="row justify-content-center mt-5">
            <div className="col-md-7"></div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default Discipline;
