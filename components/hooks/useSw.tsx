import { useEffect, useState } from 'react';
/*
    this hook just returns the users current settings
*/

const useSw = (path: string) => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register(path).then(
        function (registration) {
          console.log(`[sw] ${path} successfuly registered`);
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
  }, [path]);
};

export default useSw;
