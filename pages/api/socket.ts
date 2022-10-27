import { Server } from "socket.io";
import type { NextApiRequest, NextApiResponse } from "next";
const ioHandler = (req: NextApiRequest, res: any) => {
  if (!res.socket.server.io) {
    console.log("*First use, starting socket.io");

    const io = new Server(res.socket.server);

    io.on("connection", (socket) => {
      console.log(io.sockets.sockets.size);
      socket.emit("users", io.sockets.sockets.size);
      socket.on("user-leave", () => {
        socket.emit("user-leave");
      });
    });

    res.socket.server.io = io;
  } else {
    res.socket.server.io.emit(
      "users",
      res.socket.server.io.sockets.sockets.size
    );
    console.log("socket.io already running");
  }
  res.end();
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default ioHandler;
