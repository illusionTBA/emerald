/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from "next";
import { Serviceframe } from "../components/proxy";
import { useRouter } from "next/router";
import { xor } from "../components/utils";
import React, { useState, useMemo, useEffect, useRef } from "react";
import BareClient from "@tomphttp/bare-client";
import { Navbar } from "../components/ui";
// type favicon = string | React.ReactNode;
const service: NextPage<any> = () => {
  const [doctitle, setDoctitle] = useState();
  const [docicon, setDocicon] = useState();
  const iframe = useRef<HTMLIFrameElement>(null);
  const router = useRouter();
  const { s } = router.query;

  useEffect(() => {
    if (iframe.current != null) {
      console.log(iframe.current.src);
    } else {
      console.log("null");
    }
  }, []);
  return (
    <div className="flex flex-col relative w-full h-screen">
      <div className="flex items-center justify-center">
        {" "}
        <Navbar isFrame={true} frameref={iframe} iref={iframe} />
      </div>
      <div className="max-w-full h-full">
        <Serviceframe url={s as any} ref={iframe} />
      </div>
    </div>
  );
};

export default service;
