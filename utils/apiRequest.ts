import { NextApiRequest, NextApiResponse } from "next";
import Keys from "../schemes/keys";

type usage = {
  date: string;
};

export default async function handleAPIRequest(
  restricted: boolean,
  request: NextApiRequest,
  response: NextApiResponse,
  callback: () => void
) {
  // Abort if no API Key send
  if (restricted && !request.headers.api_key) {
    response.status(401).json({ error: "API Key needed for this request." });
    return;
  }

  const apiKey = await Keys.findOne({ key: request.headers.api_key });

  // Abort if API Key not found in database
  if (restricted && !apiKey) {
    response.status(401).json({ error: "API Key not valid." });
    return;
  }

  const today = new Date().toISOString().split("T")[0];

  // Abort wheen Limit is exceeded
  if (restricted) {
    const todayIndex = apiKey.usage.findIndex(
      (index: usage) => index.date === today
    );
    if (apiKey.limit !== 0 && apiKey.usage[todayIndex].hits >= apiKey.limit) {
      response.status(429).json({ error: "API Key limit exceeded." });
      return;
    }
  }

  // Handle API Key Hits
  if (restricted) {
    const oldDates = apiKey.usage;
    const todayIndex = apiKey.usage.findIndex(
      (index: usage) => index.date === today
    );

    if (todayIndex === -1) {
      await Keys.updateOne(
        { key: request.headers.api_key },
        {
          usage: [...oldDates, { date: today, hits: 1 }],
        }
      );
    } else {
      const oldHits = apiKey.usage[todayIndex].hits;
      await Keys.updateOne(
        { key: request.headers.api_key, "usage.date": today },
        {
          $set: { "usage.$": { date: today, hits: oldHits + 1 } },
        }
      );
    }
  }

  // Handle correct Request
  callback();
}
