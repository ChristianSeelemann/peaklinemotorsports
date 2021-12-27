import React from "react";
import Image from "next/image";
import Event from "./Event";

import { eventsProps } from "../types/types";

type props = {
  events: eventsProps[];
};

export default function Calendar({ events }: props) {
  return (
    <>
      <section className="grid justify-center px-16 select-none">
        <div className="block w-48 h-48 m-auto">
          <Image
            src="/PeaklineLogo.svg"
            alt="Peakline Motorsports Log"
            layout="responsive"
            height={192}
            width={192}
            className="opacity-5"
          />
        </div>
        <section className="-mt-36">
          <h3 className="uppercase">
            <div className="flex text-center">
              <span className="hidden pr-4 sm:flex">Kommende</span> Events
            </div>
          </h3>
          <div className="-mt-2 text-xl font-bold tracking-wider text-center text-purple-600 uppercase font-montserrat">
            #GoPeakline
          </div>
        </section>
      </section>
      <section className="grid grid-cols-1 gap-4 px-4 -mt-8 sm:px-8 lg:px-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {events && events.length > 0 ? (
          events.map((event: eventsProps) => (
            <Event key={event.id} event={event} />
          ))
        ) : (
          <div>No events scheduled.</div>
        )}
      </section>
    </>
  );
}
