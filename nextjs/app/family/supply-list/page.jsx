import { SectionTitle, SectionWrapper } from "@/components/common";

const supplyLists = [
  {
    grade: "Transitional Kindergarten",
    items: [
      "Backpack - Full size with Change of uniform clothing included",
      "Small plastic pencil box",
      "One two-pocket folder",
      "Washable Markers - 10 pack",
      "Do Not Bring: pencils, sharpeners, glue sticks or scissors",
    ],
  },
  {
    grade: "Kindergarten",
    items: [
      "Backpack - Full size with Change of uniform clothing included",
      "Small pencil box",
      "Glue sticks",
      "Two pocket folders",
      "Washable markers",
      "1 set water color paint palette",
      "Do Not Bring: pencils, sharpeners, or scissors",
    ],
  },
  {
    grade: "First Grade",
    items: [
      "Small pencil box",
      "1 set of watercolors",
      '12" wooden ruler - with centimeters and inches',
      "Backpack - no binders",
      "Standard pink erasers (2)",
      "#2 pencils, sharpened",
      "1 folder with pockets",
      "Washable markers",
      "Do not bring pencil sharpeners",
    ],
  },
  {
    grade: "Second Grade",
    items: [
      "Eraser",
      '12" Ruler - with centimeters and inches',
      "Crayons",
      "Markers",
      "2 plastic, 2 pocket folders",
      "Backpack",
      "Small pencil box or zippered pouch",
      "Sharpened #2 pencils",
      "2 glue sticks",
      "Thin line dry erase markers",
      "Do not bring binders",
    ],
  },
  {
    grade: "Third Grade",
    items: [
      "Pencil box clearly labeled",
      "#2 pencils",
      "Glue sticks",
      "Scissors",
      "Red pen",
      "Large eraser",
      "Colored pencils",
      '12" ruler - with centimeters and inches',
      "2 folders with pockets",
      "3 prong plastic pocket folders (4)",
      "Binder paper - wide ruled - 8.5 x 11",
      "Composition type notebooks (2)",
      "Small backpack to fit on hook",
      "Fine point dry erase markers",
    ],
  },
  {
    grade: "Fourth Grade",
    items: [
      "Crayons",
      "Markers",
      "Colored pencils to stay at school",
      "Red, black, and blue pens",
      "Glue sticks",
      "Scissors",
      "Homework folders (2)",
      "Composition type notebooks (2)",
      "3x5 cards (100)",
      "Ruler - with centimeters and inches",
      "Hand held pencil sharpener",
      "Small hand held calculator",
      "#2 pencils",
      "Highlighters",
    ],
  },
  {
    grade: "Fifth Grade",
    items: [
      "Pink erasers",
      "Pens blue/black (3)",
      "Red pens (3)",
      "#2 pencils (large supply) NO MECHANICAL PENCILS",
      "Loose-leaf binder paper college ruled NO SPIRAL",
      "Colored pencils (set of 24)",
      "Pencil pouch - NO BOX",
      "Scissors - intermediate",
      "Dry erase markers",
      "Dry marker eraser or sock",
      "Binder - 2 inch with front pocket",
      "Hard bound Websters New World College Dictionary",
      "Large glue stick (1)",
      "Bottle of tacky glue",
      "Pocket folder (1)",
      "Gel pens (optional)",
      "Highlighters",
      "Composition notebook - college ruled",
      "White out tape",
    ],
  },
  {
    grade: "Sixth Grade",
    categories: [
      {
        name: "English",
        items: [
          "Pens - blue, black, and red ink",
          "#2 Pencils",
          "Scissors",
          "Loose-leaf college ruled paper",
          "Pencil pouch - NO BOXES",
          "Eraser",
          "Composition Notebook",
        ],
      },
      {
        name: "Math",
        items: [
          "Composition Notebook",
          "Highlighter",
          "Ruler",
          "Protractor",
          "Compass",
          "#2 Pencils",
          "Pens",
          "Dry erase markers - fine tip",
          "TI-36X Pro Calculator",
        ],
      },
      {
        name: "History",
        items: [
          "Pens",
          "#2 Pencils",
          "Colored pencils",
          "Highlighters",
          "Ruler",
          "Scissors",
          "Lined college-ruled paper",
          "Composition Notebooks (4)",
        ],
      },
      {
        name: "Bible",
        items: ["Composition Notebook"],
      },
      {
        name: "Science",
        items: [
          "Colored Pencils",
          "Composition Notebook",
          "Loose college-ruled paper",
          "Folder",
        ],
      },
    ],
  },
  {
    grade: "Seventh Grade",
    categories: [
      {
        name: "English",
        items: [
          "Pencils",
          "Pens (Blue/Black and Red)",
          "Highlighters",
          "Composition notebooks (2)",
          "College-ruled paper ",
          "Folder (1)",
          "Independent reading book",
        ],
      },
      {
        name: "Math",
        items: [
          "Graph paper",
          "TI-36X Pro Scientific Calculator",
          "Composition Notebook",
          "Dry erase markers - fine tip",
        ],
      },
      {
        name: "History",
        items: [
          "Composition notebooks",
          "Pens",
          "#2 Pencils",
          "Colored pencils",
          "Ruler",
          "Scissors",
          "Loose college ruled paper",
        ],
      },
      {
        name: "Bible",
        items: [
          "Composition Notebook",
          "Loose college-ruled paper",
          "Bible folder",
          "Colored pencils",
        ],
      },
      {
        name: "Science",
        items: [
          "Composition Notebooks",
          "Pens - blue or black",
          "Colored pens",
          "Folder",
        ],
      },
    ],
  },
  {
    grade: "Eighth Grade",
    categories: [
      {
        name: "English",
        items: [
          "Pencils",
          "Pens (Blue/Black and Red)",
          "Highlighters",
          "Composition notebooks (2)",
          "College-ruled paper ",
          "Folder (1)",
          "Independent reading book",
        ],
      },
      {
        name: "Math",
        items: [
          "TI-36X Pro Scientific Calculator",
          "Composition Notebook",
          "Algebra Graph Paper",
          "Ribbon or string for notebook",
        ],
      },
      {
        name: "History",
        items: [
          "Composition Notebooks (2)",
          "Colored pencils",
          "Pens",
          "Pencils",
          "Ribbon or string for notebooks",
        ],
      },
      {
        name: "Bible",
        items: [
          "Composition notebook",
          "Loose college ruled paper",
          "Bible folder",
          "Colored pencils",
        ],
      },
      {
        name: "Science",
        items: ["Composition notebooks", "Pens - blue or black", "Folder"],
      },
    ],
  },
];

export default function SupplyLists() {
  return (
    <SectionWrapper>
      <SectionTitle title="Supply Lists" />

      <div>
        <p className="text-2xl text-center mb-14">
          <u>DO NOT BRING:</u> iPods, tablets, game boys, cell phones, toys, or
          mechanical pencils
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full lg:w-3/4">
          {supplyLists.map((list, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-alternate mb-2"
            >
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                <h5 className="text-2xl">{list.grade}</h5>
              </div>
              <div className="collapse-content">
                {list.categories ? (
                  list.categories.map((category, catIndex) => (
                    <div key={catIndex} className="mb-5">
                      <h5 className="text-2xl underline">{category.name}</h5>
                      <ul className="list-disc list-inside">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <ul className="list-disc list-inside">
                    {list.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
