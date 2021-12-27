import React from "react";
import { streamsProps } from "../types/types";
import Stream from "./Stream";

type props = {
  streams: streamsProps;
};

export default function Streams({ streams }: props) {
  return (
    <>
      {streams &&
        streams.data.length > 0 &&
        streams.data.map((stream) => {
          return <Stream stream={stream} key={stream.user_login} />;
        })}
    </>
  );
}
