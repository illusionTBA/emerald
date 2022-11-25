/* eslint-disable react-hooks/rules-of-hooks */
import { Serviceframe } from '../components/proxy';
import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense, useRef } from 'react';
const Dynamicnav = dynamic(() => import('../components/ui/Servicenav'), {
  suspense: true,
});
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      s: context.query.s,
    },
  };
};

const Service: NextPage<{
  s: string;
}> = ({ s }) => {
  const iframe = useRef<HTMLIFrameElement>(null);
  return (
    <div className="flex flex-col relative w-full h-screen">
      <div className="flex items-center justify-center">
        <Suspense fallback={`Loading...`}>
          <Dynamicnav />
        </Suspense>
      </div>
      <div className="max-w-full h-full">
        <Serviceframe url={s} ref={iframe} />
      </div>
    </div>
  );
};

export default Service;
