// External Imports
import { useState, useEffect } from "react";
import axios from "axios";

import {
  LoadingSpinner,
  SectionTitle,
  SectionWrapper,
  Select as TwSelect,
} from "../../components";
import {
  Container,
  Box,
  Grid,
  Typography,
  Paper,
  FormControl,
  Select,
  MenuItem,
  Modal,
} from "@mui/material";

export default function Facilities() {
  const [categoryList, setCategoryList] = useState(null);
  const [selection, setSelection] = useState("Track and Field");
  const [facility, setFacility] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentImgData, setCurrentImgData] = useState(null);

  const handleOpen = ({ caption, url }) => {
    setCurrentImgData({ caption, url });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setSelection(event.target.value);
    setFacility(null);
  };

  console.log(facility);
  console.log(selection);

  useEffect(() => {
    async function getPhotos() {
      try {
        const categoryData = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/facilities`
        );

        const list = categoryData.data.data.map(
          (category) => category.attributes.name
        );

        setCategoryList(list);

        const response = await axios.get(
          `${
            import.meta.env.VITE_BASE_URL
          }/api/facilities?filters[name][$eqi]=${selection}&populate=*`
        );

        setFacility(response.data.data[0].attributes);
      } catch (error) {
        console.log(error);
      }
    }
    getPhotos();
  }, [selection]);

  if (!categoryList) return <LoadingSpinner />;

  return (
    <SectionWrapper>
      <SectionTitle title="Facilities" />
      <div className="mb-5">
        <div>
          <p className="text-xl mb-10 text-center">
            Tabernacle school is committed to maintaining and improving campus
            infrastructure for the benefit of our students.
          </p>
        </div>
        <div className="w-full lg:w-1/2 mx-auto ">
          <TwSelect
            handleChange={handleChange}
            defaultValue={selection}
            options={categoryList.map((category) => {
              return { value: category, label: category };
            })}
          />
        </div>
      </div>

      {facility ? (
        <>
          <p className="text-xl mb-5"></p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {facility.photos.data.map((photo) => {
              const { url, caption } = photo.attributes;
              return (
                <div key={url}>
                  <img
                    onClick={() => handleOpen({ url: url, caption: caption })}
                    src={url}
                    className="object-cover h-28 sm:h-32 md:h-48 lg:h-60 rounded-xl cursor-pointer w-full"
                  />
                  {/* <p className="text-xl">{caption}</p> */}
                </div>
              );
            })}
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              onClick={handleClose}
              sx={{
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <Box
                component="img"
                src={currentImgData ? currentImgData.url : null}
                sx={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </Box>
          </Modal>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </SectionWrapper>
  );
}
