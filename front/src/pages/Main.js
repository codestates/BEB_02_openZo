import React from 'react';
import MainBanner from '../components/banner/MainBanner';

export default function Main({ nftList }) {
  return (
    <>
      <MainBanner nftList={nftList} />
    </>
  );
}
