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
      title: "invidious - Youtube alternative",
      source: "https://vid.puffyan.us",
      icon: "/images/invidious.png",
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
      title: "Instagram",
      source: "https://instagram.com/",
      icon: "/images/instagram.png",
    },
    {
      title: "Reddit",
      source: "https://reddit.com",
      icon: "/images/reddit.png",
    },
    {
      title: "Mathway",
      source: "https://www.mathway.com",
      icon: "/images/Mathway.png",
    },
    {
      title: "Goku.to - Watch movies and shows for free",
      source: "https://goku.to/",
      icon: "/images/goku.png",
    },
    {
      title: "Zoro.to - watch anime for free",
      source: "https://zoro.to",
      icon: "/images/zoro.jpg",
    },
    {
      title: "Phantom Games",
      source: "https://phantom.delusionz.xyz/",
      icon: "/images/phantom.png",
    }
  ]);
}
