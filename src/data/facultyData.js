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
    grade: "Preschool",
    staff: [
      {
        name: "Betty Mason",
        title: "Director",
        image: images["bettyMason.jpg"],
        email: "Elizabethm@tbs.org",
      },
      {
        name: "Debbie Keough",
        title: "JKA",
        image: images["debbieKeough.jpg"],
        email: "Debbiek@tbs.org",
      },
      {
        name: "Jessie Mason",
        title: "JKB",
        image: images["jessieMason.jpg"],
        email: "Jessem@tbs.org",
      },
      {
        name: "Onita Chavez",
        title: "JKB Aide",
        image: images["onitaChavez.jpg"],
        email: "Onitas@tbs.org",
      },
      {
        name: "Rebecca Hoellwoarth",
        title: "Three-Year-Olds",
        image: images["rebeccaHoellwarth.jpg"],
        email: "rebeccak@tbs.org",
      },
    ],
  },
  {
    grade: "Kindergarten",
    staff: [
      {
        name: "Charina Moore",
        title: "TK",
        image: images["charinaMoore.jpg"],
        email: "Elizabethm@tbs.org",
      },
      {
        name: "Sylvia Borde",
        title: "KA",
        image: images["sylviaBorde.jpg"],
        email: "Sylviab@tbs.org",
      },
      {
        name: "Cecilia Prior",
        title: "KB",
        image: images["ceciliaPrior.jpg"],
        email: "Ceciliap@tbs.org",
      },
      {
        name: "Lina Foltz",
        title: "KC",
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
        title: "1A",
        image: images["alexisJue.jpg"],
        email: "Alexisj@tbs.org",
      },
      {
        name: "Emily Scouten",
        title: "1B",
        image: images["emilyScouten.jpg"],
        email: "Emilys@tbs.org",
      },
      {
        name: "Terra Jean McFadden",
        title: "1C",
        image: images["terraJeanMcFadden.jpg"],
        email: "Terrajeanm@tbs.org",
      },
    ],
  },
  {
    grade: "2nd Grade",
    staff: [
      {
        name: "Heather Cochnauer",
        title: "2A",
        image: images["heatherCochnauer.jpg"],
        email: "Heatherc@tbs.org",
      },
      {
        name: "Kristen McDermott",
        title: "2A",
        image: images["kristenMcDermott.jpg"],
        email: "Kristenm@tbs.org",
      },
      {
        name: "Tracy Herrera",
        title: "2B",
        image: images["tracyHerrera.jpg"],
        email: "Tracyh@tbs.org",
      },
      {
        name: "Elsy Herrera",
        title: "2C",
        image: images["elsyHerrera.jpg"],
        email: "Elsyh@tbs.org",
      },
    ],
  },
  {
    grade: "3rd Grade",
    staff: [
      {
        name: "Meg Peacock",
        title: "3A",
        image: images["megPeacock.jpg"],
        email: "Megp@tbs.org",
      },
      {
        name: "Pamela Lucido",
        title: "3B",
        image: images["pamelaLucido.jpg"],
        email: "Paml@tbs.org",
      },
      {
        name: "Haley Max",
        title: "3C",
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
        title: "4A",
        image: images["carolNissen.jpg"],
        email: "Caroln@tbs.org",
      },
      {
        name: "Alexander Buckley",
        title: "4B",
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
        title: "5A",
        image: images["brendaChapman.jpg"],
        email: "Brendac@tbs.org",
      },
      {
        name: "Aurelius Morgan",
        title: "5B",
        image: images["aureliusMorgan.jpg"],
        email: "Aureliusm@tbs.org",
      },
    ],
  },
  {
    grade: "Junior High",
    staff: [
      {
        name: "Eric Issacson",
        title: "6A English",
        image: images["ericIssacson.jpg"],
        email: "Erici@tbs.org",
      },
      {
        name: "Joey Prior",
        title: "6B History",
        image: images["joeyPrior.jpg"],
        email: "Joeyp@tbs.org",
      },
      {
        name: "Steve Souza",
        title: "7A Math",
        image: images["steveSouza.jpg"],
        email: "Steves@tbs.org",
      },
      {
        name: "Todd Keough",
        title: "7B Bible",
        image: images["toddKeough.jpg"],
        email: "Toddk@tbs.org",
      },

      {
        name: "Theresa Kukla",
        title: "8A",
        image: images["theresaKukla.jpg"],
        email: "Theresak@tbs.org",
      },
      {
        name: "Tirzah Burke",
        title: "8B English",
        image: images["tirzahBurke.jpg"],
        email: "Tirzahb@tbs.org",
      },
      {
        name: "Andy Prior",
        title: "Science",
        image: images["andyPrior.jpg"],
        email: "Andyp@tbs.org",
      },
    ],
  },
  {
    grade: "Physical Education",
    staff: [
      {
        name: "Daran Fraser",
        title: "Director",
        image: images["daranFraser.jpg"],
        email: "DaranF@tbs.org",
      },
      {
        name: "Amie Robison",
        title: "Phys Ed",
        image: images["amieRobison.png"],
        email: "Amier@tbs.org",
      },
      {
        name: "Emily Buckley",
        title: "Phys Ed",
        image: images["emilyBuckley.jpg"],
        email: "Emilyb@tbs.org",
      },
      {
        name: "Lauren Morgan",
        title: "Phys Ed",
        image: images["laurenMorgan.jpg"],
        email: "Laurenm@tbs.org",
      },
      {
        name: "Eric Issacson",
        title: "Phys Ed",
        image: images["ericIssacson.jpg"],
        email: "Erici@tbs.org",
      },
    ],
  },
  {
    grade: "Electives",
    staff: [
      {
        name: "Judy Burmeister",
        title: "Music",
        image: images["judyBurmeister.jpg"],
        email: "Judyb@tbs.org",
      },
      {
        name: "Rebecca Kelly",
        title: "Music",
        image: images["rebeccaKelly.jpg"],
        email: "Rebeccak@tbs.org",
      },
      {
        name: "Kimberlyn Schmitz",
        title: "Computers",
        image: images["kimberlynSchmitz.jpg"],
        email: "Kimberlyns@tbs.org",
      },
      {
        name: "Margaret Trice",
        title: "Art",
        image: images["margaretTrice.jpg"],
        email: "Margarett@tbs.org",
      },
      {
        name: "Cathy Colomb",
        title: "Resources",
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
        title: "Finance & Technology",
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
