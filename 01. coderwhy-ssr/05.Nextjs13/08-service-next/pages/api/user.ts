import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // 1.mock
  // 2.axios
  // 3.数据库
  const useInfo = {
    name: "liujun",
    age: 18,
  };
  res.status(200).send(useInfo);
}
