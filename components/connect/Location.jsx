import { SectionTitle, SectionWrapper } from "@/components/common";

export default function Location() {
  return (
    <SectionWrapper>
      <SectionTitle title="Location" />

      <div className="flex flex-wrap lg:flex-row gap-8 mb-10">
        <div className="basis-full lg:basis-3/4">
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              paddingTop: "56.25%",
            }}
          >
            <iframe
              title="tabernacle location"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=4380%20Concord%20Blvd%20Concord,%20CA%2094521&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
        <div className="basis-full lg:basis-1/6 grid grid-cols-2 lg:grid-cols-1">
          <div>
            <div className="mb-10">
              <h5 className="font-bold text-xl">CAMPUS ADDRESS</h5>
              <p className="text-xl">
                4380 Concord Blvd
                <br />
                Concord, CA 94521
              </p>
            </div>
            <div className="mb-10">
              <h5 className="font-bold text-xl">FRONT OFFICE</h5>
              <p className="text-xl">
                8:30AM - 4:00PM
                <br />
                (925) 685-9169
              </p>
            </div>
          </div>
          <div>
            <div className="mb-10">
              <h5 className="font-bold text-xl">SCHOOL HOURS</h5>
              <p className="text-xl">8:00AM - 3:15PM</p>
            </div>
            <div className="mb-10">
              <h5 className="font-bold text-xl">DAYCARE HOURS</h5>
              <p className="text-xl">
                6:45 am – 8:00 am
                <br />
                3:15 pm – 6:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
