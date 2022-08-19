function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context(
    "../assets/images/about/faculty/thumbnails",
    false,
    /\.(jpg|png|jpeg)$/
  )
);

export const facultyData = [
  {
    grade: "Junior Kindergarten",
    staff: [
      {
        name: "Betty Mason",
        title: null,
        image: images["bettyMason.jpg"],
        email: "Elizabethm@tbs.org",
      },
      {
        name: "Jessie Mason",
        title: null,
        image: images["jessieMason.jpg"],
        email: "Jessem@tbs.org",
      },
      {
        name: "Debbie Keough",
        title: null,
        image: images["debbieKeough.jpg"],
        email: "Debbiek@tbs.org",
      },
      {
        name: "Rebecca Hoellwoarth",
        title: null,
        image: images["rebeccaHoellwarth.jpg"],
        email: "rebeccak@tbs.org",
      },
      {
        name: "Onita Chavez",
        title: null,
        image: images["onitaChavez.jpg"],
        email: "Onitas@tbs.org",
      },
    ],
  },
  {
    grade: "Kindergarten",
    staff: [
      {
        name: "Charina Moore",
        title: null,
        image: images["charinaMoore.jpg"],
        email: "Elizabethm@tbs.org",
      },
      {
        name: "Sylvia Borde",
        title: null,
        image: images["sylviaBorde.jpg"],
        email: "Sylviab@tbs.org",
      },
      {
        name: "Cecilia Prior",
        title: null,
        image: images["ceciliaPrior.jpg"],
        email: "Ceciliap@tbs.org",
      },
      {
        name: "Lina Foltz",
        title: null,
        image: images["linaFoltz.jpg"],
        email: "Linaf@tbs.org",
      },
    ],
  },
  {
    grade: "1st Grade",
    staff: [
      {
        name: "Alexis Jue",
        title: null,
        image: images["alexisJue.jpg"],
        email: "Alexisj@tbs.org",
      },
      {
        name: "Emily Scouten",
        title: null,
        image: images["emilyScouten.jpg"],
        email: "Emilys@tbs.org",
      },
      {
        name: "Terra Jean McFadden",
        title: null,
        image: images["terraJeanMcFadden.jpg"],
        email: "Terrajeanm@tbs.org",
      },
    ],
  },
  {
    grade: "2nd Grade",
    staff: [
      {
        name: "Tracy Herrera",
        title: null,
        image: images["tracyHerrera.jpg"],
        email: "Tracyh@tbs.org",
      },
      {
        name: "Elsy Herrera",
        title: null,
        image: images["elsyHerrera.jpg"],
        email: "Elsyh@tbs.org",
      },
      {
        name: "Heather Cochnauer",
        title: null,
        image: images["heatherCochnauer.jpg"],
        email: "Heatherc@tbs.org",
      },
      {
        name: "Kristen McDermott",
        title: null,
        image: images["kristenMcDermott.jpg"],
        email: "Kristenm@tbs.org",
      },
    ],
  },
  {
    grade: "3rd Grade",
    staff: [
      {
        name: "Pamela Lucido",
        title: null,
        image: images["pamelaLucido.jpg"],
        email: "Paml@tbs.org",
      },
      {
        name: "Meg Peacock",
        title: null,
        image: images["megPeacock.jpg"],
        email: "Megp@tbs.org",
      },
      {
        name: "Haley Max",
        title: null,
        image: images["haleyMax.jpg"],
        email: "Haleym@tbs.org",
      },
    ],
  },
  {
    grade: "4th Grade",
    staff: [
      {
        name: "Carol Nissen",
        title: null,
        image: images["carolNissen.jpg"],
        email: "Caroln@tbs.org",
      },
      {
        name: "Alexander Buckley",
        title: null,
        image: images["alexanderBuckley.jpg"],
        email: "Alexb@tbs.org",
      },
    ],
  },
  {
    grade: "5th Grade",
    staff: [
      {
        name: "Brenda Chapman",
        title: null,
        image: images["brendaChapman.jpg"],
        email: "Brendac@tbs.org",
      },
      {
        name: "Aurelius Morgan",
        title: null,
        image: images["aureliusMorgan.jpg"],
        email: "Aureliusm@tbs.org",
      },
    ],
  },
  {
    grade: "Junior High",
    staff: [
      {
        name: "Steve Souza",
        title: null,
        image: images["steveSouza.jpg"],
        email: "Steves@tbs.org",
      },
      {
        name: "Andy Prior",
        title: null,
        image: images["andyPrior.jpg"],
        email: "Andyp@tbs.org",
      },
      {
        name: "Todd Keough",
        title: null,
        image: images["toddKeough.jpg"],
        email: "Toddk@tbs.org",
      },
      {
        name: "Tirzah Burke",
        title: null,
        image: images["tirzahBurke.jpg"],
        email: "Tirzahb@tbs.org",
      },
      {
        name: "Joey Prior",
        title: null,
        image: images["joeyPrior.jpg"],
        email: "Joeyp@tbs.org",
      },
      {
        name: "Eric Issacson",
        title: null,
        image: images["ericIssacson.jpg"],
        email: "Erici@tbs.org",
      },
    ],
  },
  {
    grade: "Physical Education",
    staff: [
      {
        name: "Daran Fraser",
        title: null,
        image: images["daranFraser.jpg"],
        email: "DaranF@tbs.org",
      },
      {
        name: "Amie Robison",
        title: null,
        image: images["amieRobison.png"],
        email: "Amier@tbs.org",
      },
      {
        name: "Emily Buckley",
        title: null,
        image: images["emilyBuckley.jpg"],
        email: "Emilyb@tbs.org",
      },
      {
        name: "Kristen McDermott",
        title: null,
        image: images["kristenMcDermott.jpg"],
        email: "Laurenm@tbs.org",
      },
    ],
  },
  {
    grade: "Electives",
    staff: [
      {
        name: "Judy Burmeister",
        title: null,
        image: images["bettyMason.jpg"],
        email: "Judyb@tbs.org",
      },
      {
        name: "Rebecca Kelly",
        title: null,
        image: images["rebeccaKelly.jpg"],
        email: "Rebeccak@tbs.org",
      },
      {
        name: "Kimberlyn Schmitz",
        title: null,
        image: images["kimberlynSchmitz.jpg"],
        email: "Kimberlyns@tbs.org",
      },
      {
        name: "Margaret Trice",
        title: null,
        image: images["margaretTrice.jpg"],
        email: "Margarett@tbs.org",
      },
      {
        name: "Cathy Colomb",
        title: null,
        image: images["cathyColomb.jpg"],
        email: "Cathyc@tbs.org",
      },
    ],
  },
  {
    grade: "Administration",
    staff: [
      {
        name: "Vern Taylor",
        title: "Principal",
        image: images["vernTaylor.jpg"],
        email: "Vernt@tbs.org",
      },
      {
        name: "Theresa Kukla",
        title: "Vice Principal",
        image: images["theresaKukla.jpg"],
        email: "Theresak@tbs.org",
      },
      {
        name: "Dave Pereira",
        title: "Finance & Technology Director",
        image: images["davePereira.jpg"],
        email: "Davep@tbs.org",
      },
      {
        name: "Rebeca Shreve",
        title: "Administrator",
        image: images["rebecaShreve.jpg"],
        email: "Rebecas@tbs.org",
      },
      {
        name: "Patti Chan",
        title: "Finance Manager",
        image: images["pattiChan.jpg"],
        email: "Pattic@tbs.org",
      },
      {
        name: "Lisa Mazzoncini",
        title: "Registrar & Office Manager",
        image: images["lisaMazzoncini.jpg"],
        email: "Lisam@tbs.org",
      },
      {
        name: "Laurie Pease",
        title: "Student Services Coordinator",
        image: images["lauriePease.jpg"],
        email: "Lauriep@tbs.org",
      },
      {
        name: "Lesley Nutting",
        title: "Registrar & School Support",
        image: images["lesleyNutting.jpg"],
        email: "Lesleyn@tbs.org",
      },
    ],
  },
  {
    grade: "Board of Directors",
    staff: [
      {
        name: "Bruce McIntosh",
        title: "Chairman",
        image: null,
        email: null,
      },
      {
        name: "Bob Maiellaro",
        title: "Vice Chairman",
        image: null,
        email: null,
      },
      {
        name: "Mary Lou McCauley",
        title: "Secretary",
        image: null,
        email: null,
      },
      {
        name: "Gia Francis",
        title: "Board Member",
        image: null,
        email: null,
      },
      {
        name: "Kristina Reynolds",
        title: "Board Member",
        image: null,
        email: null,
      },
      {
        name: "Charles Fikejs",
        title: "Board Member",
        image: null,
        email: null,
      },
      {
        name: "Peter Schadek",
        title: "Board Member",
        image: null,
        email: null,
      },
    ],
  },
];
