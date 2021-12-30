import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaDiscord, FaTwitch } from "react-icons/fa";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="grid justify-center px-12 pt-20 pb-10 sm:pt-28 sm:pb-20">
      <section className="flex items-center justify-center gap-3 mb-6 select-none">
        <div className="w-10 h-10">
          <Image
            src="/PeaklineLogo.svg"
            alt="Peakline Motorsports Logo"
            layout="responsive"
            height={40}
            width={40}
          />
        </div>
        <div className="font-semibold tracking-wider uppercase font-overpass mt-[0.4rem] text-lg">
          Motorsports
        </div>
      </section>
      <div className="h-8 mb-6 text-center">
        <ul className="flex justify-center gap-4 select-none sm:gap-6 text-purple-300/90 text-smfont-overpass">
          <Link href="mailto:info@peaklinems.de">
            <a className="navigation__item_footer">
              <li>Kontakt</li>
            </a>
          </Link>
          <Link href="/impressum">
            <a className="navigation__item_footer">
              <li>Impressum</li>
            </a>
          </Link>
          <Link href="/datenschutz">
            <a className="navigation__item_footer">
              <li>Datenschutz</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="text-center mb-9">
        <div className="flex justify-center gap-6 text-3xl">
          <Link href="https://www.instagram.com/peaklinemotorsports/">
            <a target="_blank">
              <FaInstagram />
            </a>
          </Link>
          <Link href="https://discord.gg/hgwdXYM">
            <a target="_blank">
              <FaDiscord />
            </a>
          </Link>
          <Link href="https://twitch.tv/peaklinems">
            <a target="_blank">
              <FaTwitch />
            </a>
          </Link>
        </div>
      </div>
      <div className="text-xs text-center select-none text-purple-300/70 font-overpass">
        Copyright © {year} Peakline Motorsports. Designed and built by
        <Link href="https://www.peakline.de/">
          <a> Peakline.de</a>
        </Link>
      </div>
    </footer>
  );
}
