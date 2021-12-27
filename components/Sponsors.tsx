/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function Sponsors() {
  return (
    <section className="grid grid-cols-2 gap-6 px-4 pt-24 m-auto text-center select-none w-72 sm:w-80 lg:w-[32rem] sm:px-8 lg:px-16">
      <Link href="https://www.peakline.de/">
        <a target="_blank" className="grid justify-center w-full col-span-2">
          <img
            src="/Peakline-Logo.png"
            alt="Peakline Logo"
            className="object-cover object-center w-60 sm:w-72 lg:w-80"
          />
          <div className="p-2 mt-3 text-sm font-bold rounded-md text-purple-400/80 font-montserrat bg-gradient-to-r from-purple-500/10 to-purple-700/10">
            Hauptsponsor
          </div>
        </a>
      </Link>
      <Link href="https://kodafactory.com/">
        <a target="_blank" className="grid justify-end w-full">
          <img
            src="/Kodafactory.png"
            alt="Peakline Logo"
            className="object-cover object-center w-32 sm:w-40 lg:w-44"
          />
          <div className="p-2 mt-2 text-sm font-bold rounded-md text-purple-400/80 font-montserrat bg-gradient-to-r from-purple-500/10 to-purple-700/10">
            Friends
          </div>
        </a>
      </Link>
      <Link href="https://www.facebook.com/P1MediaTV/">
        <a target="_blank" className="grid justify-start w-full">
          <img
            src="/P1-Media.png"
            alt="Peakline Logo"
            className="object-cover object-center w-32 sm:w-40 lg:w-44"
          />
          <div className="p-2 mt-2 text-sm font-bold rounded-md text-purple-400/80 font-montserrat bg-gradient-to-r from-purple-500/10 to-purple-700/10">
            Friends
          </div>
        </a>
      </Link>
    </section>
  );
}
