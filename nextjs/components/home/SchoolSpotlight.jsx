import { HashLink } from "../common";
// import { SunIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

export const SchoolSpotlight = () => {
  return (
    <div className="bg-alternate flex justify-center py-3 items-center gap-5">
      <HashLink
        className="text-center text-xl flex items-center gap-1 text-primary underline"
        href="/pdfs/summer-daycare-calendar-2024.pdf"
      >
        {/* <SunIcon className="h-7 w-7 mt-1" /> */}
        Summer Daycare Calendar
      </HashLink>
      <div>•</div>
      <div>
        <HashLink
          className="text-center text-xl flex items-center gap-1 text-primary underline"
          href="/connect#Employment"
        >
          {/* <BriefcaseIcon className="h-6 w-6 mt-1" /> */}
          Employment Opportunities
        </HashLink>
      </div>
    </div>
  );
};
