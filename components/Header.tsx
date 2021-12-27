import React from "react";
import Image from "next/image";
import Link from "next/link";
//import Login from "./Login";
import Navigation from "./Navigation";

import { sessionProps } from "../types/types";

export default function Header({ session }: sessionProps) {
  return (
    <header className="w-full px-3 pt-6 pb-10 sm:px-6 lg:pt-10 lg:px-12">
      <section className="relative z-50 flex items-center justify-between h-16 px-6 rounded-md select-none bg-background">
        <Link href="/">
          <a>
            <section className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 ">
                <Image
                  src="/PeaklineLogo.svg"
                  alt="Peakline Motorsports Log"
                  layout="responsive"
                  height={40}
                  width={40}
                />
              </div>
              <div className="hidden sm:flex text-lg font-semibold tracking-wider uppercase font-overpass mt-[0.2rem]">
                Motorsports
              </div>
            </section>
          </a>
        </Link>
        <section className="flex justify-between gap-4">
          <Navigation />
          {/* <Login session={session} /> */}
        </section>
      </section>
    </header>
  );
}
