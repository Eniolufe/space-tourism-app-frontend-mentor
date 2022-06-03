import React, { useState } from "react";

// Images

import launchVehicle from "../starter-code/assets/technology/image-launch-vehicle-landscape.jpg";
import launchVehiclep from "../starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../starter-code/assets/technology/image-spaceport-landscape.jpg";
import spaceportp from "../starter-code/assets/technology/image-spaceport-portrait.jpg";
import space from "../starter-code/assets/technology/image-space-capsule-landscape.jpg";
import spacep from "../starter-code/assets/technology/image-space-capsule-portrait.jpg";

import data from "../starter-code/data.json";

export default function Technology() {
  const [technology] = useState(data.technology);
  const [value, setValue] = useState(0);
  const { name, description } = technology[value];
  return (
    <>
      <div className="technology">
        <section className=" h-screen px-2 pt-5 md:text-left text-center">
          <h1 className="text-white text-2xl uppercase pt-24 md:pt-24 md:px-64">
            <span className="font-bold text-[#ffffff70] px-2">03</span> space
            launch 101
          </h1>

          <div className=" flex items-center flex-col-reverse md:flex-row md:justify-center pt-6 ">
            <article className="md:flex md:flex-row-reverse lg:w-1/2  text-white md:px-24">
              <div>
                <h3 className=" text-[#ffffff70] uppercase text-2xl">
                  The Technology
                </h3>
                <h1 className="w-full pb-2  pt-5 text-4xl uppercase">{name}</h1>
                <p className="text-[#d2d8f9] text-sm  md:pl-1 pb-10 leading-6 tracking-wide ">
                  {description}
                </p>
              </div>
              <div>
                {technology.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setValue(index)}
                    className={` md:my-4 md:mr-12 items-center mr-2  hover:bg-white  h-10 w-10 border-2 rounded-full duration-300 ${
                      index === value && "bg-white text-[#000]"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </article>
            <article>
              {name === "Launch vehicle" ? (
                <picture>
                  <source media="(min-width:768px)" srcSet={launchVehiclep} />
                  <img
                    src={launchVehicle}
                    alt={name}
                    className="block items-center md:w-[80%] w-[52%] h-60  md:py-0  md:px-10 mx-auto"
                  />
                </picture>
              ) : name === "Spaceport" ? (
                <picture>
                  <source media="(min-width:768px)" srcSet={spaceportp} />
                  <img
                    src={spaceport}
                    alt={name}
                    className="items-center md:w-[80%] w-[52%] h-60 md:py-0 md:px-10 mx-auto"
                  />
                </picture>
              ) : name === "Space" ? (
                <picture>
                  <source
                    media="(min-width:768px)"
                    srcSet={spacep}
                    className="items-center md:w-[100%] mx-auto md:px-10"
                  />
                  <img
                    src={space}
                    alt={name}
                    className="block items-center md:w-[80%] w-[52%] h-60 md:py-0 md:px-10  mx-auto"
                  />
                </picture>
              ) : null}
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
