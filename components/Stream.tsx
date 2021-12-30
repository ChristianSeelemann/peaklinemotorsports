import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitch } from "react-icons/fa";
import { streamProps } from "../types/types";

type props = {
  stream: streamProps;
};

export default function Stream({ stream }: props) {
  const thumbnail = stream.thumbnail_url
    .replace("{width}", "160")
    .replace("{height}", "90");

  return (
    <Link
      href={`https://twitch.tv/${stream.user_login}`}
      key={stream.user_login}
    >
      <a target="_blank">
        <div className="flex items-center justify-between h-16 gap-4 p-6 rounded-md shadow-md select-none bg-gradient-to-r from-purple-500/90 to-purple-700/90">
          <div className="w-7">
            <FaTwitch className="text-3xl" />
          </div>
          <div className="grid mt-1 ml-2 mr-3 justify-items-center">
            <span>
              {stream.user_name === "Peaklinems"
                ? "Wir sind Live!"
                : `${stream.user_name} ist Live!`}
            </span>
            <span className="text-purple-300/90">
              {stream.user_name === "Peaklinems"
                ? "Schau dir unseren Live Stream an."
                : `Schau dir ${stream.user_name} an.`}
            </span>
          </div>
          <div className="relative w-16 overflow-hidden rounded-lg shadow-md">
            <Image
              src={thumbnail}
              alt="Stream Thumbnail"
              width={160}
              height={90}
              layout="responsive"
            />
          </div>
        </div>
      </a>
    </Link>
  );
}
