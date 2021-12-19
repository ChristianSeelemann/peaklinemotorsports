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

  // Get All Keys
  if (method === "GET") {
    const restricted = true;

    const callback = async () => {
      try {
        const keys = await Keys.find({});
        response
          .status(200)
          .json(keys.length !== 0 ? { keys: keys } : { keys: false });
      } catch (error) {
        response.status(400).json(error);
      }
    };

    handleAPIRequest(restricted, request, response, callback);

    return;
  }

  // Create Key
  if (method === "POST") {
    const restricted = true;
    const newKeys = new Keys(request.body);

    const callback = async () => {
      try {
        const savedKeys = await newKeys.save();
        response.status(200).json(savedKeys);
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
