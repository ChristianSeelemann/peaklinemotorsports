import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sponsors() {
  return (
    <section className="grid grid-cols-2 gap-6 px-4 pt-24 m-auto text-center select-none w-80 lg:w-[32rem] sm:px-8 lg:px-16">
      <div className="col-span-2 w-60 lg:w-80 justify-self-center">
        <Link href="https://www.peakline.de/">
          <a target="_blank" className="grid justify-center">
            <Image
              src="/Peakline-Logo.png"
              alt="Peakline Logo"
              width={310}
              height={90}
            />
            <div className="p-2 mt-3 text-sm font-bold rounded-md text-purple-400/80 font-montserrat bg-gradient-to-r from-purple-500/10 to-purple-700/10">
              Hauptsponsor
            </div>
          </a>
        </Link>
      </div>
      <div className="w-32 lg:w-44">
        <Link href="https://kodafactory.com/">
          <a target="_blank" className="grid justify-end">
            <Image
              src="/Kodafactory.png"
              alt="Peakline Logo"
              height={180}
              width={310}
            />
            <div className="p-2 mt-2 text-sm font-bold rounded-md text-purple-400/80 font-montserrat bg-gradient-to-r from-purple-500/10 to-purple-700/10">
              Friends
            </div>
          </a>
        </Link>
      </div>
      <div className="w-32 lg:w-44">
        <Link href="https://www.facebook.com/P1MediaTV/">
          <a target="_blank" className="grid justify-start">
            <Image
              src="/P1-Media.png"
              alt="Peakline Logo"
              width={310}
              height={180}
            />
            <div className="p-2 mt-2 text-sm font-bold rounded-md text-purple-400/80 font-montserrat bg-gradient-to-r from-purple-500/10 to-purple-700/10">
              Friends
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
}
