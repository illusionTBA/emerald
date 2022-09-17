import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState();

  useEffect(() => {
    if (typeof window !== undefined) {
      const storage_apps = localStorage.getItem("apps");
      if (!storage_apps) {
        localStorage.setItem(
          "apps",
          JSON.stringify({
            1: {
              title: "zoro.to",
              source: "zoro.to",
            },
          })
        );
      }
    }
  }, []);

  return [apps];
};

export default useApps;
