import React from 'react';
import { useParams } from 'react-router-dom';
function Proxy(input) {
  const { url } = useParams();
  console.log(url);
  return <div>{url || 'not found'}</div>;
}

export default Proxy;
