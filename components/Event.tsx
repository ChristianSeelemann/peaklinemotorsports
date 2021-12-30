import React from "react";
import Image from "next/image";
import { eventsProps } from "../types/types";

type props = {
  event: eventsProps;
};

export default function Event({ event }: props) {
  const formattedDay = event.date.split("T")[0].split("-")[2];
  const formattedMonth = event.date.split("T")[0].split("-")[1];

  return (
    <article className="relative h-20 overflow-hidden rounded-lg shadow-lg select-none">
      <div className="absolute z-50 flex items-center justify-between w-full h-full px-4 py-6 overflow-hidden md:px-4 sm:px-2">
        <div className="grid w-16 mt-1 text-3xl font-bold tracking-wider text-center md:text-3xl sm:text-2xl font-montserrat">
          <span>{formattedDay}</span>
          <span className="-mt-2">{formattedMonth}</span>
        </div>
        <div className="grid w-full h-full ml-4 -mt-3 md:ml-4 sm:ml-2 font-overpass">
          <span className="text-xl font-bold sm:text-lg md:text-xl">
            {event.track}
          </span>
          <span className="text-purple-200/70">{event.competition.title}</span>
        </div>
        <div className="w-16 mt-3">
          {event.simulation.logo && (
            <Image
              src={`https://strapi.peaklinems.de${event.simulation.logo.url}`}
              alt="Simulation Logo"
              height={event.simulation.logo.height}
              width={event.simulation.logo.width}
              className={`brightness-0 invert max-w-[2.5rem] shadow-lg h-auto ${
                event.simulation.slug === "iracing" && "rounded-md"
              }`}
            />
          )}
        </div>
      </div>
      <div className="absolute w-full h-full bg-gradient-to-l from-purple-700 to-purple-900/70">
        {event.competition.thumbnail && (
          <Image
            src={`https://strapi.peaklinems.de${event.competition.thumbnail.formats.thumbnail.url}`}
            alt="Event Thumbnail"
            layout="fill"
            objectFit="cover"
            className=" w-full h-full opacity-40 brightness-[0.5]"
          />
        )}
      </div>
    </article>
  );
}
