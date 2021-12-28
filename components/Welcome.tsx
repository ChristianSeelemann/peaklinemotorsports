import React from "react";
import { streamsProps } from "../types/types";
import Streams from "./Streams";

type props = {
  streams: streamsProps;
};

export default function Welcome({ streams }: props) {
  return (
    <section className="flex justify-between px-4 mt-8 select-none sm:mt-10 md:mt-16 sm:px-8 lg:px-16 lg:mt-24">
      <div className="self-center w-full text-center lg:w-1/2 lg:text-left">
        <h1 className="text-3xl leading-[2.5rem] sm:leading-[3.5rem] sm:text-5xl">
          Willkommen bei <br />
          Peakline Motorsports
        </h1>
      </div>
      <section className="content-center justify-end hidden w-1/2 gap-3 lg:grid">
        <Streams streams={streams} />
      </section>
    </section>
  );
}
