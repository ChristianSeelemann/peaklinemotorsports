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
        className="absolute left-0 cursor-pointer z-[9998] flex flex-col w-full h-screen grid-cols-1 grid-rows-2 py-12 px-8 bg-black/50 backdrop-blur-md"
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
      <section
        className="absolute xl:w-2/3 xl:ml-[16.66666665%] left-0 mx-8 z-[9999] rounded-lg"
        style={{
          top: `${fromTop + 128}px`,
          maxHeight: `calc(100vh - 188px)`,
          maxWidth: `calc(100vw - 64px)`,
        }}
      >
        <Image
          src={`https://strapi.peaklinems.de${url}`}
          alt={name}
          width={width}
          height={height}
          className="z-50 rounded-lg shadow-lg bg-purple-300/10"
        />
      </section>
    </>
  );
}
