import React, { useState } from "react";
// Images

import moon from "../starter-code/assets/destination/image-moon.png";
import mars from "../starter-code/assets/destination/image-mars.png";
import europa from "../starter-code/assets/destination/image-europa.png";
import titan from "../starter-code/assets/destination/image-titan.png";

import data from "../starter-code/data.json";

export default function Destination() {
  const [destination] = useState(data.destinations);
  const [value, setValue] = useState(0);
  const { name, description, distance, travel } = destination[value];
  return (
    <>
      <div className="destination">
        <section className="md:h-screen h-full px-2 pt-5 md:text-left text-center">
          <h1 className="text-white text-2xl uppercase pt-24 md:pt-24 md:px-20">
            <span className="font-bold text-[#ffffff70] ">01</span> Pick a
            Destination
          </h1>

          <div className="md:flex items-center md:justify-around pt-6 ">
            <article>
              {name === "Moon" ? (
                <img
                  src={moon}
                  alt={name}
                  className="items-center md:w-[70%] w-[52%] md:py-0  md:px-10 mx-auto"
                />
              ) : name === "Mars" ? (
                <img
                  src={mars}
                  alt={name}
                  className="items-center md:w-[70%] w-[52%] md:py-0 md:px-10 mx-auto"
                />
              ) : name === "Europa" ? (
                <img
                  src={europa}
                  alt={name}
                  className="items-center md:w-[70%] w-[52%] md:py-0 md:px-10  mx-auto"
                />
              ) : name === "Titan" ? (
                <img
                  src={titan}
                  alt={name}
                  className="items-center md:w-[70%] w-[52%] md:py-0 md:px-10  mx-auto"
                />
              ) : null}
            </article>
            <article className="md:w-1/2 lg:w-1/2 pt-16 text-white">
              {destination.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setValue(index)}
                  className={`text-white inline-block cursor-pointer md:mr-8 mx-4 border-b-2 md:border-b-2 border-transparent hover:border-white duration-300 ${
                    index === value && "border-b-2 border-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <h1 className="w-full pb-2  pt-5 text-7xl uppercase">{name}</h1>
              <p className="text-[#d2d8f9] text-sm md:w-2/3 md:pl-1 pb-10 leading-6 tracking-wide border-b-[0.5px] border=-[#ffffff66]">
                {description}
              </p>
              <div className="flex md:justify-between justify-around lg:w-1/2 w-auto pt-10 ">
                <ul>
                  <li className="text-[#d2d8f9] text-sm">Avg. Distance</li>
                  <li className="text-white text-xl">{distance}</li>
                </ul>
                <ul>
                  <li className="text-[#d2d8f9] text-sm">Est. Travel Time</li>
                  <li className="text-white text-xl">{travel}</li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
/**const [value, setValue] = useState(0);
const { images, name, description, distance, travel } = destinations[value];**/
//const [destinations, setDestinations] = useState([]);

// const { name, description, distance, travel } = destinations;
// //const image = destinations.images.png;
// const url = " http://localhost:3002/destinations";

// useEffect(() => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((json) => {
//       console.log(json);
//       setDestinations(json);
//     });
// }, [url]);//
