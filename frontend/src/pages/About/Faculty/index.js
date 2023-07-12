import Slides from "./Slides";
import SectionTitle from "../../../components/SectionTitle";
import { Link } from "react-router-dom";
// prettier-ignore
import { Container, Grid, Box, FormControl, Select, MenuItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function SelectGrade() {
  const [facultyData, setFacultyData] = useState(null);
  const [selection, setSelection] = useState(null);
  const theme = useTheme();

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

  const facultyOptions = facultyData.map((group) => group.attributes.name);

  const selectedGroup = facultyData.filter(
    (group) => group.attributes.name === selection
  )[0];

  const staffMembersData = selectedGroup.attributes.staff_members.data;

  const staffMembers = staffMembersData.map((member) => ({
    id: member.id,
    name: member.attributes.name,
    profilePicture: member.attributes.profile_picture.data.attributes.url,
    titleShort: member.attributes.title_short,
    email: member.attributes.email,
  }));

  return (
    <Box>
      <Box sx={{ mb: 5, textAlign: "center" }}>
        <Typography variant="p">
          Choose a grade level from the dropdown and select a faculty member to
          see their profile page!
        </Typography>
      </Box>

      <FormControl fullWidth variant="standard">
        <Select
          id="faculty-select"
          value={selection ? selection : facultyOptions[0]}
          onChange={handleChange}
          sx={{
            fontFamily: "copse",
            fontSize: "2rem",
            textAlign: "center",
            pb: 1,
          }}
        >
          {facultyOptions.map((name) => (
            <MenuItem
              key={name}
              value={name}
              sx={{ fontFamily: "didact gothic", fontSize: "1.5rem" }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={4} sx={{ py: 5 }}>
        {staffMembers.map((member) => (
          <Grid
            item
            key={member.id}
            xs={12}
            sm={6}
            lg={3}
            sx={{ textAlign: "center" }}
          >
            <Link
              to={`/about/staff/${member.email}`}
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
            >
              <Box sx={{ mb: 1 }}>
                <Typography variant="h5" sx={{ whiteSpace: "nowrap" }}>
                  {member.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  overflow: "hidden",
                  mx: "auto",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src={member.profilePicture}
                />
              </Box>
              <Typography variant="h6">{member.titleShort}</Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
