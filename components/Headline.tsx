import React from "react";

interface Props {
  headline: string;
  subheading?: string;
}

export default function Headline({ headline, subheading }: Props) {
  return (
    <section
      className={`grid mx-6 mb-12 mt-4 select-none md:mt-12 lg:mt-20 sm:mx-8 lg:mx-16 ${
        subheading
          ? "xl:mb-20 md:mb-16"
          : "sm:mb-14 md:mb-[4.5rem] lg:mb-20 xl:mb-24"
      }`}
    >
      <h1 className="text-4xl sm:text-5xl leading-[2.5rem] sm:leading-[3.5rem]">
        {headline}
      </h1>
      {subheading && (
        <h2 className="text-sm sm:text-base leading-[2rem] sm:leading-[2.5rem] font-normal font-montserrat text-purple-600">
          {subheading}
        </h2>
      )}
    </section>
  );
}
