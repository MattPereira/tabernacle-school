import { HashLink } from "../common";
// import { SunIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

export const SchoolSpotlight = () => {
  return (
    <div className="border-[#e0e0e0] border-t flex flex-wrap justify-center py-4 items-center gap-5">
      <HashLink
        className="text-center text-xl flex items-center gap-1 text-primary underline text-nowrap"
        href="/pdfs/summer-daycare-calendar-2024.pdf"
      >
        {/* <SunIcon className="h-7 w-7 mt-1" /> */}
        Summer Calendar
      </HashLink>
      <div className="text-neutral-400">•</div>
      <div>
        <HashLink
          className="text-center text-xl flex items-center gap-1 text-primary underline text-nowrap"
          href="/connect#Employment"
        >
          {/* <BriefcaseIcon className="h-6 w-6 mt-1" /> */}
          Employment Opportunities
        </HashLink>
      </div>
    </div>
  );
};
