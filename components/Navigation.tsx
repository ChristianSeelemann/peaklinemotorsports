import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Mobile from "./Mobile";
import { CgClose } from "react-icons/cg";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="flex items-center text-sm font-bold tracking-wider uppercase list-none font-overpass">
        <section className="hidden lg:flex">
          {/*           <Link href="/about">
            <a>
              <li
                className={`navigation__item ${
                  router.asPath === "/about" && "navigation__item_active"
                }`}
              >
                Die violetten Pfeile
              </li>
            </a>
          </Link> */}
          <Link href="/news">
            <a>
              <li
                className={`navigation__item ${
                  router.asPath === "/news" && "navigation__item_active"
                }`}
              >
                Neuigkeiten
              </li>
            </a>
          </Link>
          <Link href="/team">
            <a>
              <li
                className={`navigation__item ${
                  router.asPath === "/team" && "navigation__item_active"
                }`}
              >
                Das Team
              </li>
            </a>
          </Link>
          <Link href="/erfolge">
            <a>
              <li
                className={`navigation__item ${
                  router.asPath === "/erfolge" && "navigation__item_active"
                }`}
              >
                Unsere Erfolge
              </li>
            </a>
          </Link>
          <Link href="/gallerie">
            <a>
              <li
                className={`navigation__item ${
                  router.asPath === "/gallerie" && "navigation__item_active"
                }`}
              >
                Gallerie
              </li>
            </a>
          </Link>
          <Link href="/fahrergesucht">
            <a>
              <li
                className={`relative navigation__item ${
                  router.asPath === "/fahrergesucht" &&
                  "navigation__item_active"
                }`}
              >
                <span>We want you!</span>
                <span className="absolute right-0 flex w-3 h-3 top-4">
                  <span className="absolute inline-flex w-full h-full bg-purple-600 rounded-full opacity-75 animate-ping"></span>
                  <span className="relative inline-flex w-3 h-3 bg-purple-700 rounded-full"></span>
                </span>
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
              <span className="w-6 h-[0.1rem] justify-self-center rounded bg-white group-hover:bg-purple-600 transition-all duration-300"></span>
              <span className="w-8 h-[0.1rem] justify-self-center rounded bg-white/70 group-hover:bg-purple-600/80 transition-all duration-300"></span>
              <span className="w-5 h-[0.1rem] justify-self-center rounded bg-white/40 group-hover:bg-purple-600/60 transition-all duration-300"></span>
            </li>
          ) : (
            <li className="grid gap-[0.35rem]">
              <CgClose className="w-8 h-8 transition-all duration-300 group-hover:text-purple-600" />
            </li>
          )}
        </section>
      </nav>
      {menuOpen && <Mobile />}
    </>
  );
}
