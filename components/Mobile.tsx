import React from "react";
import Link from "next/link";

export default function Mobile() {
  return (
    <>
      <section className="absolute left-0 z-50 grid w-full px-6 pt-6 pb-4 rounded-b-lg select-none bg-background top-12 lg:hidden">
        <ul className="grid text-lg font-bold tracking-wider uppercase font-overpass">
          <Link href="/news">
            <a>
              <li className="py-4">Neuigkeiten</li>
            </a>
          </Link>
          <Link href="/team">
            <a>
              <li className="py-4">Das Team</li>
            </a>
          </Link>
          <Link href="/erfolge">
            <a>
              <li className="py-4">Unsere Erfolge</li>
            </a>
          </Link>
          <Link href="/fahrergesucht">
            <a>
              <li className="py-4">
                <div className="relative flex">
                  <span>We want you!</span>
                  <span className="relative flex w-4 h-4 left-3 -top-1">
                    <span className="absolute inline-flex w-full h-full bg-purple-600 rounded-full opacity-75 animate-ping"></span>
                    <span className="relative inline-flex w-4 h-4 bg-purple-700 rounded-full"></span>
                  </span>
                </div>
              </li>
            </a>
          </Link>
        </ul>
      </section>
    </>
  );
}
