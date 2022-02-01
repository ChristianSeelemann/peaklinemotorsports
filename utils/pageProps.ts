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
    page?: string;
    slug?: string;
    id?: string;
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
    | "getAchievements"
    | "getGallery"
    | "getOverlays"
    | "getSingleOverlay"
    | "getSingleUpload",
  fetchTypeTwo?:
    | "getSinglePost"
    | "getPostsLastSix"
    | "getEvents"
    | "getPostsWithFilter"
    | "countPosts"
    | "getPostsAll"
    | "getDrivers"
    | "getAchievements"
    | "getGallery"
    | "getOverlays"
    | "getSingleOverlay"
    | "getSingleUpload"
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
      case "getGallery":
        const fetchURL10 = `${process.env.API_URL}/gallery`;
        const response10 = await fetch(fetchURL10);
        fetchedData = await response10.json();
        break;
      case "getOverlays":
        const fetchURL11 = `${process.env.API_URL}/overlays`;
        const response11 = await fetch(fetchURL11);
        fetchedData = await response11.json();
        break;
      case "getSingleOverlay":
        const fetchURL12 = `${process.env.API_URL}/overlays?slug=${context.query.slug}`;
        const response12 = await fetch(fetchURL12);
        fetchedData = await response12.json();
        break;
      case "getSingleUpload":
        const uploadFetch = await fetch(
          `${process.env.API_URL}/overlays?slug=${context.query.slug}`
        );
        const uploadData: any = await uploadFetch.json();
        if (uploadData[0].eventlogo && uploadData[0].eventlogo.id) {
          const uploadID = uploadData[0].eventlogo.id;
          const fetchURL13 = `${process.env.API_URL}/upload/files/${uploadID}`;
          const response13 = await fetch(fetchURL13);
          fetchedDataTwo = await response13.json();
        } else {
          fetchedDataTwo = null;
        }
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
      case "getGallery":
        const fetchURL10 = `${process.env.API_URL}/gallery`;
        const response10 = await fetch(fetchURL10);
        fetchedDataTwo = await response10.json();
        break;
      case "getOverlays":
        const fetchURL11 = `${process.env.API_URL}/overlays`;
        const response11 = await fetch(fetchURL11);
        fetchedData = await response11.json();
        break;
      case "getSingleOverlay":
        const fetchURL12 = `${process.env.API_URL}/overlays?slug=${context.query.slug}`;
        const response12 = await fetch(fetchURL12);
        fetchedData = await response12.json();
        break;
      case "getSingleUpload":
        const uploadFetch = await fetch(
          `${process.env.API_URL}/overlays?slug=${context.query.slug}`
        );
        const uploadData: any = await uploadFetch.json();
        if (uploadData[0].eventlogo && uploadData[0].eventlogo.id) {
          const uploadID = uploadData[0].eventlogo.id;
          const fetchURL13 = `${process.env.API_URL}/upload/files/${uploadID}`;
          const response13 = await fetch(fetchURL13);
          fetchedDataTwo = await response13.json();
        } else {
          fetchedDataTwo = null;
        }
        break;
    }
  }

  const CLIENT_ID = process.env.TWITCH_ID || "";
  const CLIENT_SECRET = process.env.TWITCH_SECRET || "";

  const token = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`,
    {
      method: "POST",
    }
  );
  const tokenData: any = await token.json();

  const streams = await fetch(
    "https://api.twitch.tv/helix/streams?user_login=peaklinems&user_login=raven2k3&user_login=sitalia",
    {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        "Client-Id": CLIENT_ID,
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
