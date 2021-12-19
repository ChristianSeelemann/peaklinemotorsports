import dbConnect from "../../../utils/dbConnect";
import Keys from "../../../schemes/keys";
import { NextApiRequest, NextApiResponse } from "next";
import handleAPIRequest from "../../../utils/apiRequest";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method } = request;

  await dbConnect();

  // Get One Key
  if (method === "GET") {
    const restricted = true;

    const callback = async () => {
      try {
        const keys = await Keys.findOne({ key: request.query.id });
        response.status(200).json({ keys: keys });
      } catch (error) {
        response.status(400).json(error);
      }
    };

    handleAPIRequest(restricted, request, response, callback);

    return;
  }

  // Edit Key
  if (method === "PUT") {
    const restricted = true;

    const callback = async () => {
      try {
        const updatedNews = await Keys.findOneAndUpdate(
          { key: request.query.id },
          {
            $set: request.body,
          },
          { new: true }
        );
        response.status(200).json(updatedNews);
      } catch (error) {
        response.status(400).json(error);
      }
    };

    handleAPIRequest(restricted, request, response, callback);

    return;
  }

  // Delete Key
  if (method === "DELETE") {
    const restricted = true;

    const callback = async () => {
      try {
        const keys = await Keys.findOne({ key: request.query.id });
        await keys.delete();
        response.status(200).json("API Key has been deleted.");
      } catch (error) {
        response.status(400).json(error);
      }
    };

    handleAPIRequest(restricted, request, response, callback);

    return;
  }

  // Wrong Method
  else {
    response.status(404).json({ error: "Method not allowed" });
    return;
  }
}
