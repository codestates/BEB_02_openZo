import React from 'react';
import styled from 'styled-components';

import NftList from '../components/NftList';
import PageBanner from '../components/PageBanner';

export default function Gallery() {
  return (
    <>
      <PageBanner text={'Explore'} />
      <NftList />
    </>
  );
}
