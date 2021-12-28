import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed select-none z-[1030] left-0 top-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm grid place-items-center">
      <div className="w-24">
        <Image
          src="/PeaklineLogo.svg"
          alt="Peakline Motorsports Logo"
          width={288}
          height={288}
          className="animate-pulse"
        />
      </div>
    </div>
  );
}
