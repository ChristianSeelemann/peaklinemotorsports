import React, { useState } from "react";
import Image from "next/image";
import { driversProps, simulationsProps } from "../types/types";
import Modal from "./Modal";

interface Props {
  driver: driversProps;
}

export default function Driver({ driver }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fromTop, setFromTop] = useState(0);
  const [driverData, setDriverData] = useState({});

  function handleDriverClick(driver: driversProps) {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "hidden";
      setFromTop(window.scrollY);
      setIsModalOpen(true);
    }
    setDriverData(driver);
    setIsModalOpen(true);
  }

  return (
    <>
      <article
        className="relative cursor-pointer select-none grid overflow-hidden h-[21rem] rounded-xl"
        onClick={() => handleDriverClick(driver)}
      >
        <div className="z-10 flex flex-col justify-between p-4 bg-gradient-to-b from-black/20 to-black/60">
          <div className="flex justify-between">
            <span className="grid w-9 gap-1 mt-[0.4rem]">
              {driver.simulations.length !== 0 &&
                driver.simulations.map((simulation: simulationsProps) => (
                  <div key={simulation.id}>
                    <Image
                      src={`https://strapi.peaklinems.de${simulation.logo.url}`}
                      alt={`${simulation.title} Logo`}
                      width={simulation.logo.width}
                      height={simulation.logo.height}
                      priority
                      className={`brightness-0 invert ${
                        simulation.slug === "iracing" && "rounded-sm"
                      }`}
                    />
                  </div>
                ))}
            </span>
            <div className="flex gap-2">
              <span>
                <div className="flex items-center gap-2 px-3 pt-2 pb-1 text-4xl font-bold font-overpass rounded-xl">
                  {driver.nationality && (
                    <span className="w-7">
                      <Image
                        src={`https://strapi.peaklinems.de${driver.nationality.url}`}
                        alt="Flagge"
                        width={driver.nationality.width}
                        priority
                        height={driver.nationality.height}
                        className="rounded-md shadow-lg"
                      />
                    </span>
                  )}
                  {driver.number && <span>{driver.number}</span>}
                </div>
              </span>
            </div>
          </div>
          <div className="grid">
            <span className="text-4xl font-bold font-overpass">
              {driver.name}
            </span>
            <span className="px-3 pt-2 pb-1 mt-3 text-sm rounded-md shadow-lg bg-gradient-to-r from-violet-800/90 to-violet-600/90 w-fit font-overpass">
              {driver.position ? driver.position : "Fahrer"}
            </span>
          </div>
        </div>
        <div className="absolute w-full h-full">
          {driver.image && (
            <Image
              src={`https://strapi.peaklinems.de${driver.image.url}`}
              alt={`Bild von ${driver.name}`}
              layout="fill"
              priority
              className="object-cover object-center transition-all duration-300 bg-violet-300/10"
            />
          )}
        </div>
      </article>
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          driver={driverData}
          fromTop={fromTop}
        />
      )}
    </>
  );
}
