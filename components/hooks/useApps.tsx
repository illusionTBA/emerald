import { useEffect, useState } from 'react';
import { isUrl } from '../utils';
const useApps = () => {
  const [apps, setApps] = useState<any[]>();

  useEffect(() => {
    if (typeof window !== undefined) {
      const storage_apps = localStorage.getItem('apps');
      if (!storage_apps) {
        localStorage.setItem('apps', JSON.stringify([]));
        setApps([]);
      }
      setApps(JSON.parse(storage_apps!) as any[]);
    }
  }, []);
  const createApp = (app: any) => {
    try {
      const appExists = localStorage.getItem('apps');
      const apps = appExists ? JSON.parse(appExists) : [];
      apps.push(app);
      localStorage.setItem('apps', JSON.stringify(apps));
    } catch (err) {
      console.log(err);
    }
    // add the the app to the apps localstorage without overwriting the other apps
    // if (!localStorage.getItem('apps')) {
    //   console.log(app);
    //   localStorage.setItem('apps', JSON.stringify(app.join()));
    // }
    // localStorage.setItem(
    //   'apps',
    //   JSON.stringify([...(localStorage.getItem('apps') as any), app]),
    // );
  };
  return { apps, createApp };
};

export default useApps;
