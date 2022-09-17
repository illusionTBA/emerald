// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      title: "Youtube",
      source: "https://youtube.com",
      icon: "/images/youtube.png",
    },
    {
      title: "Spotify",
      source: "https://open.spotify.com/",
      icon: "/images/Spotify.png",
    },
    {
      title: "Discord",
      source: "https://discord.com",
      icon: "/images/Discord.png",
    },
    {
      title: "Reddit",
      source: "https://reddit.com",
      icon: "/images/reddit.png",
    },
  ]);
}
