import { useEffect, useState } from 'react';

export const useUrlPath = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const { pathname } = window.location;
    setUrl(pathname);
  }, []);

  return url;
};
