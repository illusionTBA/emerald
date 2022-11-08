import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import useSettings from '../hooks/useSettings';
import { Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import { isUrl, xor } from '../utils';
interface Props {
  title?: string;
  url: string;
}

const Serviceframe = (props: Props, ref: any) => {
  let url = props.url;
  const [proxy, cloak, engine] = useSettings();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="flex w-full h-full">
      {loading ? (
        <div className="flex w-full h-full items-center justify-center flex-col space-y-2">
          <Text color={'base.100'} fontSize={'4xl'}>
            Loading {proxy}
          </Text>
          <Spinner colorScheme={'green'} label="Loading..." size={'lg'} />
        </div>
      ) : null}
      <iframe
        width={'100%'}
        ref={ref}
        className={loading ? `hidden` : `border-none`}
        height="100%"
        src={`/~/${proxy}/${url}`}
      ></iframe>
    </div>
  );
};

export default React.forwardRef(Serviceframe);
