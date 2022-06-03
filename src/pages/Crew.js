import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
// Images

import commander from "../starter-code/assets/crew/image-douglas-hurley.png";
import missionSpecialist from "../starter-code/assets/crew/image-mark-shuttleworth.png";
import pilot from "../starter-code/assets/crew/image-victor-glover.png";
import flightEngineer from "../starter-code/assets/crew/image-anousheh-ansari.png";

import data from "../starter-code/data.json";

export default function Crew() {
  const [crew] = useState(data.crew);
  const [value, setValue] = useState(0);
  const { name, role, bio } = crew[value];
  return (
    <>
      <div className="crew">
        <section className=" h-full px-2 pt-5 md:text-left text-center">
          <h1 className="text-white text-2xl uppercase pt-24 md:pt-24 md:px-20 md:mx-20">
            <span className="font-bold text-[#ffffff70] px-2">02</span> Meet
            Your Crew
          </h1>

          <div className="flex items-center flex-col-reverse md:flex-row md:justify-center pt-6 mx-20">
            <article className="md:w-1/2 lg:w-1/2  text-white md:px-24">
              <h3 className=" text-[#ffffff70] uppercase text-2xl">{role}</h3>
              <h1 className="w-full pb-2  pt-5 text-4xl uppercase">{name}</h1>
              <p className="text-[#d2d8f9] text-sm md:w-2/3 md:pl-1 pb-10 leading-6 tracking-wide ">
                {bio}
              </p>
              {crew.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setValue(index)}
                  className={` mx-2 hover:bg-white  h-5 w-5 rounded-full duration-300 ${
                    index === value && "border-white"
                  }`}
                >
                  <BsCircle />
                </button>
              ))}
            </article>
            <article>
              {name === "Douglas Hurley" ? (
                <img
                  src={commander}
                  alt={name}
                  className="items-center md:w-[70%] w-[52%] md:py-0  md:px-10 mx-auto"
                />
              ) : name === "Mark Shuttleworth" ? (
                <img
                  src={missionSpecialist}
                  alt={name}
                  className="items-center md:w-[70%] w-[52%] md:py-0 md:px-10 mx-auto"
                />
              ) : name === "Victor Glover" ? (
                <img
                  src={pilot}
                  alt={name}
                  className="items-center md:w-[70%] w-[52%] md:py-0 md:px-10  mx-auto"
                />
              ) : name === "Anousheh Ansari" ? (
                <img
                  src={flightEngineer}
                  alt={name}
                  className="items-center md:w-[70%] w-[52%] md:py-0 md:px-10  mx-auto"
                />
              ) : null}
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
