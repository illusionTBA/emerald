import { useEffect, useState } from 'react';
/*
    this hook just returns the users current settings
*/

const useSw = (path: string, scope: string | any) => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register(path, {
        scope: scope
      }).then(
        function (registration) {
          console.log(`[sw] ${path} successfuly registered with a scope of ${registration.scope}`);
        },
        function (err) {
          console.log(
            `%c[sw] ${path} failed to register, error: `,
            'color:red;',
            err,
          );
        },
      );
    }
  }, [path, scope]);
};

export default useSw;
