/* eslint-disable react-hooks/rules-of-hooks */
// import { Serviceframe } from '../components/proxy';
import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense, useRef, useState, useEffect } from 'react';
const Dynamicnav = dynamic(() => import('../components/ui/Servicenav'), {
  suspense: true,
});
import { Spinner, Text } from '@chakra-ui/react';
import useSettings  from '../components/hooks/useSettings'
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query)
  return {
    props: {
      s: context.query.s,
    },
  };
};

const Service: NextPage<{
  s: string;
}> = ({ s }) => {
  const [proxy, cloak, engine] = useSettings();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
 
  return (
    <div className="flex flex-col relative w-full h-screen">
      <div className="flex items-center justify-center">
        <Suspense fallback={`Loading...`}>
          <Dynamicnav />
        </Suspense>
      </div>
      <div className="max-w-full h-full">
      <div className="flex w-full h-full">
      {loading ? (
        <div className="flex w-full h-full items-center justify-center flex-col space-y-2">
          <Text color={'base.100'} fontSize={'4xl'}>
            Loading {proxy}
          </Text>
          <Spinner colorScheme={'green'} label="Loading..." size={'xl'} />
        </div>
      ) : null}
      <iframe
        width={'100%'}
        className={loading ? `hidden` : `border-none`}
        height="100%"
        src={`/~/${proxy}/${s}`}
      ></iframe>
    </div>

      </div>
    </div>
  );
};

export default Service;
