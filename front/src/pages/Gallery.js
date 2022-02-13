import React from 'react';
import styled from 'styled-components';

import NftList from '../components/NftList';
import PageBanner from '../components/PageBanner';

export default function Gallery() {
  // TODO: search 하면 받은 list로 NFT List 넘겨줘서 view
  // TODO: text도 맞춰서 수정

  return (
    <>
      <PageBanner text={'Explore'} />
      <NftList />
    </>
  );
}
