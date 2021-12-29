import React from "react";
import Image from "next/image";
import { CgClose } from "react-icons/cg";

interface Props {
  fromTop: number;
  setIsLightboxOpen: any;
  url: string;
  height: number;
  width: number;
  name: string;
}

export default function Lightbox({
  fromTop,
  setIsLightboxOpen,
  url,
  height,
  width,
  name,
}: Props) {
  return (
    <>
      <section
        className="absolute left-0 cursor-pointer z-[9998] flex flex-col w-full h-screen grid-cols-1 grid-rows-2 p-12 bg-black/50 backdrop-blur-md"
        style={{ top: `${fromTop}px` }}
        onClick={() => {
          const body = document.querySelector("body");
          if (body) {
            body.style.overflow = "auto";
            setIsLightboxOpen(false);
          }
        }}
      >
        <div
          className="grid items-center justify-end h-12 mb-8 cursor-pointer"
          onClick={() => {
            const body = document.querySelector("body");
            if (body) {
              body.style.overflow = "auto";
              setIsLightboxOpen(false);
            }
          }}
        >
          <CgClose className="text-5xl" />
        </div>
      </section>
      <div
        className="absolute left-0 mx-12 z-[9999] overflow-hidden rounded-lg"
        style={{ top: `${fromTop + 128}px`, maxHeight: `calc(100vh - 188px)` }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
          alt={name}
          width={width}
          height={height}
          className="z-50 rounded-lg shadow-lg bg-purple-300/10"
        />
      </div>
    </>
  );
}
