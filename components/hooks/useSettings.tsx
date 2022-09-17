import { useEffect, useState } from 'react';
/*
    this hook just returns the users current settings
*/

interface settings {
  proxy: string;
  cloak: string;
  engine: string;
}

const useSettings = () => {
  const [proxy, setProxy] = useState<any>();
  const [cloak, setCloak] = useState<string>();
  const [engine, setEngine] = useState<string>();
  useEffect(() => {
    const settings: settings = JSON.parse(
      localStorage.getItem('settings') as any,
    );
    if (settings === undefined || settings === null) {
      localStorage.setItem(
        'settings',
        JSON.stringify({
          proxy: 'uv',
          cloak: 'none',
          engine: 'https://www.google.com/search?q=',
        }),
      );
      const settings: settings = JSON.parse(
        localStorage.getItem('settings') as any,
      );
      setProxy(settings.proxy);
      setCloak(settings.cloak);
      setEngine(settings.engine);
    } else {
      const settings: settings = JSON.parse(
        localStorage.getItem('settings') as any,
      );
      setProxy(settings.proxy);
      setCloak(settings.cloak);
      setEngine(settings.engine);
    }
  }, []);

  return [proxy, cloak, engine];
};

export default useSettings;
