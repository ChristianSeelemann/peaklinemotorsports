import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactTooltip from "react-tooltip";
import { achievementsProps } from "../types/types";

interface Props {
  achievement: achievementsProps;
}

export default function Achievement({ achievement }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  let type = "";
  switch (achievement.type) {
    case "champion_driver":
      type = "/trophy_1.webp";
      break;
    case "champion_team":
      type = "/trophy_1.webp";
      break;
    case "second_driver":
      type = "/trophy_3.webp";
      break;
    case "second_team":
      type = "/trophy_3.webp";
      break;
    case "third_driver":
      type = "/trophy_2.webp";
      break;
    case "third_team":
      type = "/trophy_2.webp";
      break;
    case "driver_of_the_day":
      type = "/medal.webp";
      break;
  }

  let typeText = "";
  switch (achievement.type) {
    case "champion_driver":
      typeText = "Fahrerchampion";
      break;
    case "champion_team":
      typeText = "Teamchampions";
      break;
    case "second_driver":
      typeText = "2. Fahrerwertung";
      break;
    case "second_team":
      typeText = "2. Teamwertung";
      break;
    case "third_driver":
      typeText = "3. Fahrerwertung";
      break;
    case "third_team":
      typeText = "3. Teamwertung";
      break;
    case "driver_of_the_day":
      typeText = "Driver of the Day";
      break;
  }

  const formattedYear = achievement.date.split("-")[0];

  return (
    <article className="grid items-center w-full gap-4 shadow-lg select-none rounded-xl bg-background grid-cols-erfolgesmall lg:grid-cols-erfolge">
      <div className="grid items-center w-16 h-full py-1 pt-2 text-lg font-bold text-center rounded-l-lg bg-violet-600 text-violet-100 lg:w-20">
        {formattedYear}
      </div>
      <div className="flex flex-col gap-1 py-2 lg:flex-row lg:justify-between">
        <h2 className="mt-1 overflow-hidden text-sm lg:flex lg:items-center">
          {achievement.competition}
        </h2>
        <div className="lg:flex lg:mt-1 lg:flex-col lg:justify-center lg:w-60">
          {achievement.drivers.map((driver: any) => (
            <div
              key={driver.id}
              className="text-sm sm:text-base font-montserrat"
            >
              <span>{driver.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        key={achievement.id}
        data-tip={`${typeText}<br />${achievement.competition}`}
        className="grid w-12 p-2 mr-4 cursor-pointer sm:w-14 justify-self-end place-self-center"
      >
        <Image src={type} alt="Award Image" height={512} width={512} priority />
      </div>
      {isMounted && (
        <ReactTooltip
          multiline
          arrowColor="transparent"
          className="!rounded-lg font-montserrat !bg-violet-700 !px-2 !py-0"
        />
      )}
    </article>
  );
}
