import Slides from "./Slides";
import Accordion from "./FacultyAccordion";
import SectionTitle from "../../../components/SectionTitle";
// prettier-ignore
import { Container, Grid, Box, FormControl, Select, MenuItem, Typography } from "@mui/material";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Faculty() {
  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Faculty" />
      <Container>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xl={10}>
            <Slides />
            <SelectGrade />
            <Accordion />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function SelectGrade() {
  const [facultyData, setFacultyData] = useState(null);
  const [selection, setSelection] = useState(null);

  // ask GPT about how to make sure data is only fetched one time
  // even as user changes select option which will trigger re-render?
  // for science!

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  useEffect(function fetchFacultyData() {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/staff-groups?populate[staff_members][populate][0]=profile_picture`
        );

        setFacultyData(response?.data?.data);
        setSelection(response?.data?.data[0].attributes.name);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  if (!facultyData) return <LoadingSpinner />;
  console.log("DATA", facultyData);

  const facultyOptions = facultyData.map((group) => group.attributes.name);
  console.log("OPTIONS", facultyOptions);

  const selectedGroup = facultyData.filter(
    (group) => group.attributes.name === selection
  )[0];

  const staffMembers = selectedGroup.attributes.staff_members.data;
  console.log("staffMembers", staffMembers);

  return (
    <Box>
      <FormControl fullWidth>
        <Select
          id="faculty-select"
          value={selection ? selection : facultyOptions[0]}
          onChange={handleChange}
        >
          {facultyOptions.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={4}>
        {staffMembers.map((member) => (
          <Grid item key={member.id} xs={12} lg={3}>
            <Typography variant="p">{member.attributes.name}</Typography>
            <Box
              component="img"
              sx={{ width: "100%" }}
              src={member.attributes.profile_picture.data.attributes.url}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
