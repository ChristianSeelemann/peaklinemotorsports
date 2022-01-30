import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Mobile from "./Mobile";
import { CgClose } from "react-icons/cg";

export default function StreamingNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="flex items-center text-sm font-bold tracking-wider uppercase list-none font-overpass">
        <section className="hidden lg:flex">
          <Link href="/">
            <a>
              <li
                className={`navigation__item ${
                  router.asPath === "/news" && "navigation__item_active"
                }`}
              >
                <span>Zur Website</span>
              </li>
            </a>
          </Link>
        </section>
        <section
          className="flex cursor-pointer select-none lg:hidden group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen ? (
            <li className="grid gap-[0.35rem]">
              <span className="w-6 h-[0.1rem] justify-self-center rounded bg-white group-hover:bg-violet-600 transition-all duration-300"></span>
              <span className="w-8 h-[0.1rem] justify-self-center rounded bg-white/70 group-hover:bg-violet-600/80 transition-all duration-300"></span>
              <span className="w-5 h-[0.1rem] justify-self-center rounded bg-white/40 group-hover:bg-violet-600/60 transition-all duration-300"></span>
            </li>
          ) : (
            <li className="grid gap-[0.35rem]">
              <CgClose className="w-8 h-8 transition-all duration-300 group-hover:text-violet-600" />
            </li>
          )}
        </section>
      </nav>
      {menuOpen && <Mobile />}
    </>
  );
}
