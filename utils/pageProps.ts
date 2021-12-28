import type { NextApiRequest, NextApiResponse } from "next";

import { getSession } from "next-auth/client";
import fetch from "node-fetch";
import dbConnect from "./dbConnect";

type Props = {
  locale: string;
  req: NextApiRequest;
  res: NextApiResponse;
  resolvedUrl: string;
  query: {
    page: string;
    slug: string;
  };
};

export default async function pageProps(
  context: Props,
  fetchType?:
    | "getSinglePost"
    | "getPostsLastSix"
    | "getEvents"
    | "getPostsWithFilter"
    | "countPosts"
    | "getPostsAll"
    | "getDrivers"
    | "getAchievements",
  fetchTypeTwo?:
    | "getSinglePost"
    | "getPostsLastSix"
    | "getEvents"
    | "getPostsWithFilter"
    | "countPosts"
    | "getPostsAll"
    | "getDrivers"
    | "getAchievements"
) {
  await dbConnect();

  const sessionData = await getSession(context);
  let session;
  if (!sessionData) {
    session = null;
  } else {
    session = sessionData.user;
  }

  let fetchedData;
  let fetchedDataTwo;

  const page = context.query.page ? context.query.page : 1;
  const start = Number(page) * 9 - 9;
  const limit = 9;

  if (fetchType) {
    switch (fetchType) {
      case "getPostsLastSix":
        const fetchURL3 = `${process.env.API_URL}/posts?_sort=date:desc&_limit=6`;
        const response3 = await fetch(fetchURL3);
        fetchedData = await response3.json();
        break;
      case "getPostsAll":
        const fetchURL2 = `${process.env.API_URL}/posts?_sort=date:desc`;
        const response2 = await fetch(fetchURL2);
        fetchedData = await response2.json();
        break;
      case "getEvents":
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const minute =
          today.getMinutes() < 10
            ? "0" + today.getMinutes()
            : today.getMinutes();
        const hour =
          today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
        const dateNow =
          today.getFullYear() +
          "-" +
          mm +
          "-" +
          dd +
          "T" +
          hour +
          ":" +
          minute +
          ":00.000Z";
        const fetchURL4 = `${process.env.API_URL}/events?_sort=date&_limit=10&date_gte=${dateNow}`;
        const response4 = await fetch(fetchURL4);
        fetchedData = await response4.json();
        break;
      case "getPostsWithFilter":
        const fetchURL5 = `${process.env.API_URL}/posts?_sort=date:desc&_start=${start}&_limit=${limit}`;
        const response5 = await fetch(fetchURL5);
        fetchedData = await response5.json();
        break;
      case "countPosts":
        const fetchURL6 = `${process.env.API_URL}/posts/count`;
        const response6 = await fetch(fetchURL6);
        fetchedData = await response6.json();
        break;
      case "getSinglePost":
        const fetchURL7 = `${process.env.API_URL}/posts?slug=${context.query.slug}`;
        const response7 = await fetch(fetchURL7);
        fetchedData = await response7.json();
        break;
      case "getDrivers":
        const fetchURL8 = `${process.env.API_URL}/drivers?active=true&_sort=name`;
        const response8 = await fetch(fetchURL8);
        fetchedData = await response8.json();
        break;
      case "getAchievements":
        const fetchURL9 = `${process.env.API_URL}/achievements?intern=true&_sort=date:desc`;
        const response9 = await fetch(fetchURL9);
        fetchedData = await response9.json();
        break;
    }
  }

  if (fetchTypeTwo) {
    switch (fetchTypeTwo) {
      case "getPostsLastSix":
        const fetchURL3 = `${process.env.API_URL}/posts?_sort=date:desc&_limit=6`;
        const response3 = await fetch(fetchURL3);
        fetchedDataTwo = await response3.json();
        break;
      case "getPostsAll":
        const fetchURL2 = `${process.env.API_URL}/posts?_sort=date:desc`;
        const response2 = await fetch(fetchURL2);
        fetchedDataTwo = await response2.json();
        break;
      case "getEvents":
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const minute =
          today.getMinutes() < 10
            ? "0" + today.getMinutes()
            : today.getMinutes();
        const hour =
          today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
        const dateNow =
          today.getFullYear() +
          "-" +
          mm +
          "-" +
          dd +
          "T" +
          hour +
          ":" +
          minute +
          ":00.000Z";
        const fetchURL4 = `${process.env.API_URL}/events?_sort=date&_limit=10&date_gte=${dateNow}`;
        const response4 = await fetch(fetchURL4);
        fetchedDataTwo = await response4.json();
        break;
      case "getPostsWithFilter":
        const fetchURL5 = `${process.env.API_URL}/posts?_sort=date:desc&_start=${start}&_limit=${limit}`;
        const response5 = await fetch(fetchURL5);
        fetchedDataTwo = await response5.json();
        break;
      case "countPosts":
        const fetchURL6 = `${process.env.API_URL}/posts/count`;
        const response6 = await fetch(fetchURL6);
        fetchedDataTwo = await response6.json();
        break;
      case "getSinglePost":
        const fetchURL7 = `${process.env.API_URL}/posts?slug=${context.query.slug}`;
        const response7 = await fetch(fetchURL7);
        fetchedDataTwo = await response7.json();
        break;
      case "getDrivers":
        const fetchURL8 = `${process.env.API_URL}/drivers?active=true`;
        const response8 = await fetch(fetchURL8);
        fetchedDataTwo = await response8.json();
        break;
      case "getAchievements":
        const fetchURL9 = `${process.env.API_URL}/achievements?intern=true&_sort=date:desc`;
        const response9 = await fetch(fetchURL9);
        fetchedDataTwo = await response9.json();
        break;
    }
  }

  const token = await fetch(
    "https://id.twitch.tv/oauth2/token?client_id=d70qf3x51btsh8784t46vxu5sp4fcq&client_secret=k6vbzu7qc6as7g6dg9gi0ed6cjkpdr&grant_type=client_credentials",
    {
      method: "POST",
    }
  );
  const tokenData: any = await token.json();

  const streams = await fetch(
    "https://api.twitch.tv/helix/streams?user_login=peaklinems&user_login=raven2k3&user_login=sitalia&user_login=quirkitized&user_login=maxim",
    {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        "Client-Id": "d70qf3x51btsh8784t46vxu5sp4fcq",
      },
    }
  );
  const streamsData = await streams.json();

  return {
    props: {
      session,
      fetchedData: fetchedData || null,
      fetchedDataTwo: fetchedDataTwo || null,
      streamsData: streamsData || null,
    },
  };
}
