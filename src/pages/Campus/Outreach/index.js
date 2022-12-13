import friends from "../../../assets/images/campus/friends-feeding.jpg";
import thanksgiving from "../../../assets/images/campus/thanksgiving-food.jpg";
import christmas from "../../../assets/images/campus/operation-christmas.jpg";
import SectionTitle from "../../../common/SectionTitle";
import { Container, Box, Grid, Paper, Link, Typography } from "@mui/material";

const Outreach = () => {
  const outreachPrograms = [
    {
      title: "Friends Feeding Friends",
      description:
        "An outreach ministry that serves the homeless and low income people in our community in loving memory of Sarah Deniston.",
      image: friends,
      url: "http://gsconcord.com/outreach-ministries/friends-feeding-friends/",
    },
    {
      title: "Thanksgiving Food Drive",
      description:
        "Tabernacle partners with the Food Bank of Contra Costa and Solano during November to collect healthy and nonperishable foods.",
      image: thanksgiving,
      url: "https://www.foodbankccs.org/give-help/host-a-drive.html",
    },
    {
      title: "Operation Christmas Child",
      description:
        "Partner with Samaritan's Purse to provide Christmas gifts to children in need around the world.",
      image: christmas,
      url: "https://www.samaritanspurse.org/what-we-do/operation-christmas-child/",
    },
  ];

  return (
    <Box id="Outreach" sx={{ py: 5, bgcolor: "background.alternate" }}>
      <SectionTitle title="Outreach" />
      <Container sx={{ py: 5, mb: 5 }}>
        <Grid container spacing={3}>
          {outreachPrograms.map((program) => (
            <Grid item xs={12} md={6} lg={4}>
              <Link
                to={program.url}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: "30px",
                    height: "100%",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                    },
                  }}
                >
                  <Box>
                    <Box
                      component="img"
                      src={program.image}
                      sx={{
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "30px",
                        height: "250px",
                        objectPosition: "center",
                      }}
                      alt=""
                    />
                  </Box>

                  <Box sx={{ p: 3 }}>
                    <Box sx={{ mb: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        {program.title}
                      </Typography>
                    </Box>
                    <Typography variant="p">{program.description}</Typography>
                  </Box>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Outreach;
