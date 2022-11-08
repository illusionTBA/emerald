/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from 'next';
import { Serviceframe } from '../components/proxy';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { Navbar } from '../components/ui';

const Service: React.FC = () => {
  const iframe = useRef<HTMLIFrameElement>(null);
  const router = useRouter();
  const { s } = router.query;
  useEffect(() => {
    if (iframe.current != null) {
      console.log(iframe.current.src);
    } else {
      console.log('null');
    }
  }, []);

  return (
    <div className="flex flex-col relative w-full h-screen">
      <div className="flex items-center justify-center">
        <Navbar isFrame={true} frameref={iframe} iref={iframe} />
      </div>
      <div className="max-w-full h-full">
        <Serviceframe url={s! as string} ref={iframe} />
      </div>
    </div>
  );
};

export default Service;
