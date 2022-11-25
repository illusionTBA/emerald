import { useEffect, useState } from 'react';

/*
    this hook may be useless but it just makes my code in whatever file is using it
    less messy
*/

const useUseragent = () => {
  const [ua, setUa] = useState<string>();
  useEffect(() => {
    if (typeof navigator !== undefined) {
      setUa(navigator.userAgent);
    }
  }, []);
  return [ua];
};

export default useUseragent;
