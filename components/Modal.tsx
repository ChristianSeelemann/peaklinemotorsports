import React from "react";
import Image from "next/image";
import ReactTooltip from "react-tooltip";
import { CgClose } from "react-icons/cg";

import { achievementsProps, simulationsProps } from "../types/types";

interface Props {
  fromTop: number;
  setIsModalOpen: any;
  driver: any;
}

export default function Modal({ fromTop, setIsModalOpen, driver }: Props) {
  return (
    <>
      <section
        className="absolute cursor-pointer left-0 z-[9998] flex flex-col w-full h-screen grid-cols-1 grid-rows-2 px-8 sm:px-12 py-8 bg-black/50 backdrop-blur-md"
        style={{ top: `${fromTop}px` }}
        onClick={() => {
          setIsModalOpen(false);
          const body = document.querySelector("body");
          if (body) {
            body.style.overflow = "auto";
            setIsModalOpen(false);
          }
        }}
      >
        <div
          className="grid items-center justify-end h-12 mb-8 cursor-pointer"
          onClick={() => {
            const body = document.querySelector("body");
            if (body) {
              body.style.overflow = "auto";
              setIsModalOpen(false);
            }
          }}
        >
          <CgClose className="text-5xl" />
        </div>
      </section>
      <section
        className="absolute w-full select-none px-8 sm:px-12 pb-12 left-0 z-[9999] overflow-x-auto"
        style={{ top: `${fromTop + 122}px`, height: "calc(100vh - 122px)" }}
      >
        <article className="flex flex-col gap-6 xl:gap-10 xl:m-auto xl:w-2/3 xl:justify-center md:flex-row">
          <section className="w-full md:min-w-[14]rem] lg:min-w-[18]rem] md:max-w-[14rem] lg:max-w-[18rem]">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${driver.image.url}`}
              alt={`Bild von ${driver.name}`}
              height={driver.image.height}
              width={driver.image.width}
              className="rounded-lg shadow-lg bg-purple-300/10"
            />
            {driver.simulations.length !== 0 && (
              <div className="items-center justify-center hidden gap-4 p-3 mt-4 rounded-lg sm:flex bg-purple-600/80">
                {driver.simulations.map((simulation: simulationsProps) => (
                  <div
                    key={simulation.id}
                    className="relative w-10 md:w-8 lg:w-10"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}${simulation.logo.url}`}
                      alt={`${simulation.title} Logo`}
                      height={simulation.logo.height}
                      width={simulation.logo.width}
                      layout="responsive"
                      className={`brightness-0 invert ${
                        simulation.slug === "iracing" && "rounded-sm"
                      }`}
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
          <section className="w-full sm:mt-6 md:mt-2">
            <div className="flex items-center w-full gap-3">
              <span className="hidden w-12 sm:flex">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${driver.nationality.url}`}
                  alt={`Bild von ${driver.nationality}`}
                  height={driver.nationality.height}
                  width={driver.nationality.width}
                  className="rounded-lg shadow-lg"
                />
              </span>
              <div className="flex items-center justify-between w-full">
                <span className="pr-2 mt-2 text-3xl font-bold font-overpass">
                  {driver.name}
                </span>
                {driver.number && (
                  <span
                    className="px-2 -mt-2 pt-2 shadow-md sm:flex pb-[0.1rem] text-4xl font-bold rounded-lg font-overpass hidden"
                    style={{ backgroundColor: driver.color }}
                  >
                    {driver.number}
                  </span>
                )}
              </div>
            </div>
            {driver.content && (
              <div
                className="mt-6 text-lg leading-7 whitespace-pre-wrap text-purple-100/90 font-overpass editor"
                dangerouslySetInnerHTML={{ __html: driver.content }}
              />
            )}
            {driver.achievements.length !== 0 && (
              <div className="flex flex-wrap gap-3 mt-12 -ml-3 -mr-3">
                {driver.achievements.map((award: achievementsProps) => {
                  let type = "";
                  switch (award.type) {
                    case "champion_driver":
                      type = "/trophy_1.png";
                      break;
                    case "champion_team":
                      type = "/trophy_1.png";
                      break;
                    case "second_driver":
                      type = "/trophy_3.png";
                      break;
                    case "second_team":
                      type = "/trophy_3.png";
                      break;
                    case "third_driver":
                      type = "/trophy_2.png";
                      break;
                    case "third_team":
                      type = "/trophy_2.png";
                      break;
                    case "driver_of_the_day":
                      type = "/medal.png";
                      break;
                  }

                  let typeText = "";
                  switch (award.type) {
                    case "champion_driver":
                      typeText = "Fahrerchampion";
                      break;
                    case "champion_team":
                      typeText = "Teamchampion";
                      break;
                    case "second_driver":
                      typeText = "2. Fahrerwertung";
                      break;
                    case "second_team":
                      typeText = "2. Teamwertung";
                      break;
                    case "third_driver":
                      typeText = "3. Fahrerwertung";
                      break;
                    case "third_team":
                      typeText = "3. Teamwertung";
                      break;
                    case "driver_of_the_day":
                      typeText = "Driver of the Day";
                      break;
                  }

                  return (
                    <div
                      key={award.id}
                      data-tip={`${typeText}<br />${award.competition}`}
                      className="cursor-pointer w-14"
                    >
                      <Image
                        src={type}
                        alt="Award Image"
                        height={512}
                        width={512}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </article>
        <ReactTooltip multiline />
      </section>
    </>
  );
}
