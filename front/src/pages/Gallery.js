import React from 'react';
import styled from 'styled-components';

import NftList from '../components/NftList';

const StyledH1 = styled.h1`
  text-align: center;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  height: 25vh;
`;

export default function Gallery() {
  return (
    <>
      <HeaderSection>
        <StyledH1>Explore the Sea !</StyledH1>
      </HeaderSection>
      <NftList />
    </>
  );
}
