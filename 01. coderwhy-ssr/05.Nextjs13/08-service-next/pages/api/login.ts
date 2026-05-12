import type { NextApiRequest, NextApiResponse } from "next";

// /api/login -> POST
export default function handlersdfsdf(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.url);
  console.log(req.method);
  console.log(req.query);
  console.log(req.body);

  if (req.method === "POST") {
    const useInfo = {
      name: "liujun",
      age: 18,
      token: "aabbcc",
    };
    res.status(200).send(useInfo);
  } else {
    res.status(405).end();
  }
}
