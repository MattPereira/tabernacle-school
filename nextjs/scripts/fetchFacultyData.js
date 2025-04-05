const fs = require("fs").promises;
const path = require("path");

async function fetchFacultyData() {
  console.log("hello world");
  const res = await fetch(
    `https://tabernacle-cms.up.railway.app/api/staff-groups?populate[staff_members][populate][0]=profile_picture`
  );

  const { data } = await res.json();

  // Create objects with order property
  const unsortedGroups = data.map((staffGroup) => {
    const { name, staff_members } = staffGroup.attributes;
    return {
      name,
      order: staffGroup.id,
      staff: staff_members.data.map((member) => {
        const { name, title_short, title_long, email, profile_picture } =
          member.attributes;

        const profile_picture_url = profile_picture?.data?.attributes?.url;

        return {
          name,
          titleShort: title_short,
          titleLong: title_long,
          email,
          profilePictureUrl: profile_picture_url,
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
