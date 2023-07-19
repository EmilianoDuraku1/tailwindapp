import React from "react";
import { aboutUs } from "./AboutData";

function AboutUs() {
  return (
    <section className="box-border mx-auto max-w-xxl px-auto my-32">
      <div className="flex justify-center">
        <div className="w-4/5">
          <h5 className="text-primaryColor font-bold my-[1.5rem] text-xs uppercase">
            {aboutUs[0].tagline}
          </h5>
          <h2 className="text-3xl my-2.5 font-semibold">
            {aboutUs[0].headline}
          </h2>
          <p className="text-base font-light my-5">{aboutUs[0].description}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
