import React from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const params = useParams();

  return (
    <>
      <div>{params.id}</div>
      <div>Detail</div>
    </>
  );
}
