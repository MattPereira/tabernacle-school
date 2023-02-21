import Showcase from "../../../../components/Showcase";

import { Container, Row, Col, Table } from "react-bootstrap";

import uniform from "../../../../assets/images/family/uniform.jpg";

const UniformGuidelines = () => {
  return (
    <>
      <Showcase title="Uniform Guidelines" />
      <section className="py-5">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col lg={6}>
              <img
                src={uniform}
                className="img-fluid mb-3 rounded border border-5 border-white"
                alt="Child in uniform"
              />
            </Col>
            <Col lg={6}>
              <p className="lead ">
                Student appearance and attention to grooming are important
                factors in a safe, focused learning environment. Standards such
                as dress codes play a large part in preparing students for a
                future in the broader world beyond Tabernacle School. Each
                student’s appearance should reflect a positive, appropriate
                image of themselves and their school.{" "}
              </p>
              <p className="lead ">
                Administrators, faculty, and staff have the final decision when
                enforcing student dress and grooming standards during school and
                all school-related activities. Both parents and students should
                take the time to become familiar with Tabernacle’s policies and
                standards. The sites below have images and descriptions of the
                uniform options described and approved by Tabernacle.{" "}
              </p>
              <div className="card bg-white p-4 mb-3 text-center">
                <h5 className="mb-3">
                  <strong>
                    <u>Reccommended Uniform Vendors:</u>
                  </strong>
                </h5>
                <p>
                  Land’s End School Uniforms{" "}
                  <a href="http://www.landsend.com/school">
                    landsend.com/school
                  </a>
                </p>
                <p>
                  French Toast School Uniforms{" "}
                  <a href="http://www.frenchtoast.com">frenchtoast.com</a>
                </p>
                <p>
                  Tabernacle School Tiger Wear{" "}
                  <a href="http://www.tabernacle.school/tigerWear">
                    tabernacle.school/tigerWear
                  </a>
                </p>
              </div>
            </Col>
          </Row>

          <Row className="">
            <Col lg={6}>
              <Table bordered>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      colspan="3"
                      className="table-dark text-white"
                    >
                      Polo Tops & Cotton Dress Shirts
                    </th>
                  </tr>
                </thead>
                <thead className="table-secondary">
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Description</th>
                    <th scope="col">Colors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="">
                      Polo
                    </th>
                    <td>
                      Long sleeve or short sleeve button collar, Interlock
                      Fabric, Classic Mesh or Dry-Fit Polo with banded sleeves.{" "}
                    </td>
                    <td>
                      Solid Color – Dark Navy – Hunter Green – Black – Light
                      Pink – True Red – Royal Blue – White – Heather Gray –
                      Light Blue.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Dress Shirts</th>
                    <td>Short or long sleeves, button-up collar.</td>
                    <td>white</td>
                  </tr>
                  <tr>
                    <th scope="row">Fit</th>
                    <td colspan="2">Appropriate Size</td>
                  </tr>
                  <tr>
                    <th scope="row">Required</th>
                    <td colspan="2">
                      Shirts tucked in and belted for slacks and shorts. Tops
                      tucked in for skirts.
                    </td>
                  </tr>
                </tbody>
              </Table>

              <Table bordered>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      colspan="3"
                      className="table-dark text-white"
                    >
                      Chapel & Awards Assembly Dress Code
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Girls</th>
                    <td>
                      Khaki slacks, shorts, skirt or jumper with Dark Navy polo.
                      Shirt tucked in to skirt. Shirt tucked in and belted with
                      shorts or slacks
                    </td>
                  </tr>
                  <tr>
                    <th>Boys</th>
                    <td>
                      Khaki slacks or shorts with Dark Navy polo shirt. Tucked
                      in and belted.
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      colspan="3"
                      className="table-dark text-white"
                    >
                      Free Dress Day Guidelines
                    </th>
                  </tr>
                </thead>
                <thead className="table-secondary">
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Style</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Pants & Shorts</th>
                    <td>
                      Khaki slacks, shorts, skirt or jumper with Dark Navy polo.
                      Shirt tucked in to skirt. Shirt tucked in and belted with
                      shorts or slacks
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Tops</th>
                    <td>
                      Covered shoulders/backs. No violent, controversial or
                      negative images or messages
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Skirts & Dresses</th>
                    <td>
                      Hem must rest at top of knee all the way around, bike
                      shorts must be worn underneath skirts, jumpers, dresses.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Footwear</th>
                    <td>
                      Authentic style athletic sneakers designed for sport
                      activities. Athletic-style Mary Janes for girls.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Theme Days</th>
                    <td>
                      Students participating in Theme Days must wear clothing
                      that reflects the theme.
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      colspan="3"
                      className="table-dark text-white"
                    >
                      Hair, Make-Up, & Body Art
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Girl's Hair</th>
                    <td>Hair is to be clean, trimmed, brushed and neat.</td>
                  </tr>
                  <tr>
                    <th>Boy's Hair</th>
                    <td>
                      Hair is to be worn in a short, neat style. Trimmed above
                      eyebrows, ears and top of shirt collar.
                    </td>
                  </tr>
                  <tr>
                    <th>Not Allowed</th>
                    <td>
                      Extreme hairstyles or unnatural dyes, cut-in images,
                      designs or shaving. Body piercings (other than ears),
                      tattoos (real or temporary), heavy face or eye make-up,
                      writing/drawing on the body.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col lg={6}>
              <Table bordered>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      colspan="3"
                      className="table-dark text-white"
                    >
                      Skirts, Jumpers, & Knit Dresses
                    </th>
                  </tr>
                </thead>
                <thead className="table-secondary">
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Description</th>
                    <th scope="col">Colors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Knit Polo Dresses</th>
                    <td>Polo-style knit dress.</td>
                    <td>
                      Solid Color – Dark Navy – Hunter Green – Black – Light
                      Pink – True Red – Royal Blue – White – Heather Gray –
                      Light Blue.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Skirts & Jumpers</th>
                    <td>Poly/cotton blend pleated skirt or jumper</td>
                    <td>Khaki, Dark Navy or Land’s End Clear Blue Plaid.</td>
                  </tr>
                  <tr>
                    <th scope="row">Fit</th>
                    <td colspan="2">
                      Waistband resting at natural waist. Hem resting at top of
                      knees around entire skirt.
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      colspan="3"
                      className="table-dark text-white"
                    >
                      Belts
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Style</th>
                    <td>Plain flat or braided leather style.</td>
                  </tr>
                  <tr>
                    <th>Colors</th>
                    <td>Solid, black, brown</td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      colspan="3"
                      className="table-dark text-white"
                    >
                      Footwear
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Shoes</th>
                    <td>
                      Plain flat or athletic shoes – supportive arch,
                      bottom-tread, ankle height. Girl’s athletic-style Mary
                      Janes.{" "}
                      <strong>
                        <u>NO LIGHT- UP SHOES</u>
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <th>Socks</th>
                    <td>
                      Quarter-cut ankle socks. Girls may wear solid colored
                      knee-highs or tights, as well.{" "}
                      <strong>
                        <u>NO LEGGINGS</u>
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      colspan="3"
                      className="table-dark text-white"
                    >
                      Slacks & Shorts
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Pants</th>
                    <td>
                      Plain Poly/Cotton blend, pleated or flat front. Side and
                      back slash pockets, front zipper or elastic waist.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Colors</th>
                    <td>Khaki, Navy or Black.</td>
                  </tr>
                  <tr>
                    <th scope="row">Fit</th>
                    <td>
                      Waistband resting at natural waist. Hem resting at top of
                      knees for shorts.
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      colspan="3"
                      className="table-dark text-white"
                    >
                      Outerwear
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Style</th>
                    <td>
                      Coat, Sweatshirts, Sweaters, Vests, Scarves, Gloves and
                      Hats or Headbands.
                    </td>
                  </tr>
                  <tr>
                    <th>Colors</th>
                    <td>
                      One Solid color or patterned. NO LOGOS OR IMAGES other
                      than Tabernacle School Tiger Wear.
                    </td>
                  </tr>
                  <tr>
                    <th>Fit</th>
                    <td>Appropriate fit</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default UniformGuidelines;
