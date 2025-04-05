const fs = require("fs").promises;
const path = require("path");

async function fetchFacultyData() {
  console.log("hello world");
  const res = await fetch(
    `https://tabernacle-cms.up.railway.app/api/staff-groups?populate[staff_members][populate]=*`
  );

  const { data } = await res.json();

  // Create objects with order property
  const unsortedGroups = data.map((staffGroup) => {
    const { name, staff_members } = staffGroup.attributes;
    return {
      name: name.split(" ").join("-").toLowerCase(),
      order: staffGroup.id,
      staff: staff_members.data.map((member) => {
        const {
          name,
          title_short,
          title_long,
          email,
          photos,
          profile_picture,
          description,
        } = member.attributes;

        return {
          name,
          titleShort: title_short,
          titleLong: title_long,
          email,
          description,
          images: {
            profile: profile_picture?.data?.attributes?.url,
            gallery: photos?.data?.map((photo) => photo.attributes.url) || [],
          },
        };
      }),
    };
  });

  // Sort the groups by order
  const sortedGroups = unsortedGroups.sort((a, b) => a.order - b.order);

  // Convert the sorted array into an object with group names as keys
  const finalData = sortedGroups.reduce((obj, group) => {
    // Add the group to the object, using name as key
    obj[group.name] = {
      order: group.order,
      staff: group.staff,
    };
    return obj;
  }, {});

  const filePath = path.join(__dirname, "../data/faculty.json");
  await fs.writeFile(filePath, JSON.stringify(finalData, null, 2));
}

fetchFacultyData();
