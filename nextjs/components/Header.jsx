"use client";
import Link from "next/link";
import { HashLink } from "@/components/common";
import { useState } from "react";

import {
  BriefcaseIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  Bars3Icon,
  // ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const topNavItems = [
  {
    text: "Contact",
    icon: <EnvelopeIcon className="h-5 w-5 mt-0.5" />,
    path: "/connect#Contact",
  },
  {
    text: "Calendar",
    icon: <CalendarDaysIcon className="h-5 w-5 mt-0.5" />,
    path: "/pdfs/calendar-23-24.pdf",
  },
  {
    text: "Employment",
    icon: <BriefcaseIcon className="h-5 w-5 mt-0.5" />,
    path: "/connect#Employment",
  },
  // {
  //   text: "Facts",
  //   icon: <ArrowTopRightOnSquareIcon className="h-5 w-5" />,
  //   url: "https://logins2.renweb.com/logins/ParentsWeb-Login.aspx",
  // },
];

const midNavItems = [
  "about",
  "admissions",
  "academics",
  "campus",
  "family",
  "connect",
];

export const Header = () => {
  // State to toggle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to close dropdown
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div>
      {/* Top Navbar */}
      <div className="bg-primary text-primary-content flex justify-between py-3 md:py-5 px-5 xl:px-8 items-center">
        <div>
          <Link
            href="/"
            className="text-2xl sm:text-3xl xl:text-4xl font-bold font-roboto-mono tracking-wide"
          >
            Tabernacle School
          </Link>
        </div>
        <div>
          {/* Default Link Display (for all screens larger than mobile) */}
          <div className="hidden lg:flex gap-7">
            {topNavItems.map((item) =>
              item.text === "Calendar" ? (
                <a
                  href={item.path}
                  key={item.text}
                  className="flex items-center text-xl hover:underline"
                  target="_blank" // Optional, opens in a new tab
                  rel="noopener noreferrer" // Security measure for opening links in a new tab
                >
                  {item.icon}
                  <span className="ml-1">{item.text}</span>
                </a>
              ) : (
                <HashLink
                  href={item.path}
                  key={item.text}
                  className="flex items-center text-xl hover:underline"
                >
                  {item.icon}
                  <span className="ml-1">{item.text}</span>
                </HashLink>
              )
            )}
          </div>
          {/* Mobile Dropdown (hidden for all other screen sizes) */}
          <div className="lg:hidden dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn px-2"
              onClick={toggleDropdown}
            >
              <Bars3Icon className="h-8 w-8" />
            </div>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu dropdown-content z-50 p-2 bg-zinc-200 rounded-box w-52 mt-4 "
              >
                {midNavItems.map((item) => (
                  <li
                    key={item}
                    className="text-black hover:bg-primary hover:text-white hover:rounded-lg text-xl capitalize hover:font-bold"
                    onClick={closeDropdown} // Close dropdown on link click
                  >
                    <Link href={`/${item}`}>{item}</Link>
                  </li>
                ))}
                <li
                  className="text-black hover:bg-primary hover:text-white hover:rounded-lg text-xl capitalize hover:font-bold"
                  onClick={closeDropdown} // Close dropdown on link click
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`/pdfs/calendar-23-24.pdf`}
                  >
                    Calendar
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* Mid Navbar (shown only on screen sizes greater than medium)*/}
      <div className="hidden bg-zinc-200 lg:flex justify-center">
        {midNavItems.map((item) => (
          <Link
            key={item}
            href={`/${item}`}
            className="text-xl uppercase hover:bg-white p-5 hover:text-primary font-montserrat font-semibold"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};
