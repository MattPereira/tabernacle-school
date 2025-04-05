const fs = require("fs").promises;
const path = require("path");

async function fetchFacilityData() {
  console.log("hello world");
  const res = await fetch(
    `https://tabernacle-cms.up.railway.app/api/facilities?populate=*`
  );

  const { data } = await res.json();

  const facilityData = data.map((group) => {
    const { name, photos } = group.attributes;

    return {
      id: group.id,
      name,
      images: photos.data.map((photo) => {
        const { url, caption, name } = photo.attributes;
        return {
          name,
          url,
          caption,
        };
      }),
    };
  });

  const facilities = facilityData.reduce((acc, facility) => {
    acc[facility.name] = {
      images: facility.images,
    };
    return acc;
  }, {});

  const filePath = path.join(__dirname, "../data/facility.json");
  await fs.writeFile(filePath, JSON.stringify(facilities, null, 2));
}

fetchFacilityData();
