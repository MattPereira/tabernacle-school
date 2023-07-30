import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Typography, Container, Grid, Box, Button } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function ParentOrientation() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(1);

  const containerRef = useRef();

  useEffect(() => {
    function updateSize() {
      setPageSize(containerRef.current.getBoundingClientRect().width);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goPrevPage() {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  }

  function goNextPage() {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  }

  return (
    <>
      <Typography variant="h2" align="center" sx={{ pt: 10 }}>
        Parent Orientation
      </Typography>
      <section>
        <Container sx={{ py: 10 }}>
          <Grid container justifyContent="center" spacing={4} sx={{ mb: 5 }}>
            <Grid item xs={12} md={10} lg={8} xl={6}>
              <Typography variant="p">
                We are excited to have you back on campus for the 2023-2024
                school year. No children on campus on parent orientation day
                please. Meetings will take place in your child's classrooms.
                Please see the slideshow below for highlighted information for
                the school year. For more information please see the{" "}
                <Link to="/family">family page</Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={10} lg={8} xl={6}>
              <table className="table table-bordered bg-white">
                <thead>
                  <tr className="table-dark text-white">
                    <th scope="col">Time</th>
                    <th scope="col">Grades</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">10:00 AM</th>
                    <td>KINDERGARTEN and TK</td>
                  </tr>
                  <tr>
                    <th scope="row">11:00 AM</th>
                    <td>FIRST AND SECOND GRADE</td>
                  </tr>
                  <tr>
                    <th scope="row">1:00 PM</th>
                    <td colSpan="2">THIRD, FOURTH, AND FIFTH GRADE</td>
                  </tr>
                  <tr>
                    <th scope="row">2:00 PM</th>
                    <td colSpan="2">SIXTH, SEVENTH AND EIGHTH GRADE</td>
                  </tr>
                </tbody>
              </table>
            </Grid>
          </Grid>
          <Box ref={containerRef} sx={{ display: "flex" }}>
            <Document
              file="/pdfs/information/parent-orientation.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} width={pageSize} />
            </Document>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              my: 5,
            }}
          >
            <Button
              type="button"
              variant="contained"
              onClick={goPrevPage}
              disabled={pageNumber <= 1}
            >
              Prev
            </Button>

            <Button
              type="button"
              variant="contained"
              onClick={goNextPage}
              disabled={pageNumber >= numPages}
            >
              Next
            </Button>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="p" align="center">
              Page {pageNumber} of {numPages}
            </Typography>
          </Box>
        </Container>
      </section>
    </>
  );
}
