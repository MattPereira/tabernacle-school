import ComputerIcon from "@mui/icons-material/Computer";
import { ReactComponent as Computer } from "../../assets/svgs/computer.svg";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";

import { Container, Grid, Box, Typography, Icon } from "@mui/material";
import { SectionTitle, SectionWrapper } from "../../components";

const formData = [
  {
    name: "Technology",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
        />
      </svg>
    ),
    url: "/pdfs/forms/technology.pdf",
  },
  {
    name: "Chromebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 18"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12"
      >
        <rect x="4" y="4" width="16" height="12" rx="2" ry="2"></rect>
        <path d="M2 18h20"></path>
      </svg>
    ),

    url: "/pdfs/forms/chromebook.pdf",
  },
  {
    name: "Bicycle & Walk",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12"
      >
        <circle cx="7" cy="16" r="4"></circle>
        <circle cx="17" cy="16" r="4"></circle>
        <path d="M5 16l5.5-6l3.5 3l4.5-5"></path>
        <path d="M15 12l2 4l-3 3"></path>
        <path d="M11.5 9.5l-2-3"></path>
      </svg>
    ),
    url: "/pdfs/forms/bicycle-walk.pdf",
  },
  {
    name: "Medication",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    url: "/pdfs/forms/medication.pdf",
  },
  {
    name: "Sports Physical",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    url: "/pdfs/forms/sports.pdf",
  },
];

export default function FamilyForms() {
  return (
    <SectionWrapper>
      <SectionTitle title="Forms" />

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-14 mb-10">
        {formData.map((item, index) => (
          <div key={index}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <p className="text-xl">{item.name}</p>
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
