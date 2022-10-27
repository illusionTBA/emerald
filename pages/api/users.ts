import { NextApiRequest } from "next";

export default (req: NextApiRequest, res: any) => {
  if (req.method === "GET") {
    // get message

    // dispatch to channel "message"
    res?.socket?.server?.io?.emit(
      "users",
      res?.socket?.server?.io.sockets.sockets.size
    );

    // return message
    res.status(201).json(res?.socket?.server?.io.sockets.sockets.size);
  }
};
