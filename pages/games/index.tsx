import type { NextPage } from "next";
import { Navbar } from "../../components/ui";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
type GameData = {
  title: string;
  id: number;
  image?: string;
  source: string;
  description: string;
  rating?: string;
};

const index: NextPage = () => {
  const games = useQuery(
    ["getGames"],
    (): Promise<any> => axios.get("/api/games").then((res) => res.data)
  );

  return (
    <>
      <div className="flex w-full h-screen items-center justify-center flex-col">
        <Navbar />
        {games.isFetched ? (
          <div className=" w-3/5 h-4/5 mt-9 flex-col space-y-5 overflow-y-auto">
            <h1 className="text-2xl text-white">Flash games</h1>
            <div className="flex items-center border-y-[1px]  rounded-sm border-primary-200 h-40 space-x-5">
              {Array.isArray(games.data.flash)
                ? games.data.flash.map((game: GameData, index: number) => {
                    return (
                      <div
                        key={index}
                        className="w-[20%] h-[83%] bg-primary-400"
                      ></div>
                    );
                  })
                : null}
            </div>
            <h1 className="text-2xl text-white">HTML games</h1>
            <div className=" flex items-center border-y-[1px]  rounded-sm border-primary-200 h-40 space-x-5">
              {Array.isArray(games.data.html)
                ? games.data.flash.map((game: GameData, index: number) => {
                    return (
                      <div
                        key={index}
                        className="w-[20%] h-[83%] bg-primary-400"
                      ></div>
                    );
                  })
                : null}
            </div>
            <h1 className="text-2xl text-white">Emulator games</h1>
            <div className=" flex items-center border-y-[1px]  rounded-sm border-primary-200 h-40 space-x-5"></div>
            <h1 className="text-2xl text-white">Proxy games</h1>
            <div className=" flex items-center border-y-[1px]  rounded-sm border-primary-200 h-40 space-x-5"></div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default index;
