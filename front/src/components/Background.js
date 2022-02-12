import React from 'react';
import styled from 'styled-components';

const BackgroundDiv = styled.div`
  /* object-fit: cover; */
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default function Background() {
  return (
    <BackgroundDiv>
      <video width="100%" autoPlay loop muted>
        <source src="/videos/Ocean.mp4" type="video/mp4" />
        cannot find any videos
      </video>
    </BackgroundDiv>
  );
}
