import React from 'react';
import styled from 'styled-components';
import Background from './Background';

const BackgroundWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 30vh;
  box-shadow: 1px 1px 5px 1px grey;
  // [h-offset] [v-offset] [blur] [spread] [color]
`;

const TextWrapper = styled.div`
  position: relative;
  height: 30vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
`;

const StyledH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 3.5rem;
  color: rgba(255, 255, 255, 0.5);
`;

export default function Banner({ text }) {
  // TODO: NFT 몇개 불러와서 넣어주고 Carousel에 표시

  return (
    <>
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
      <TextWrapper>
        <StyledH1>{text}</StyledH1>
      </TextWrapper>
    </>
  );
}
