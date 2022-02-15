import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const BackgroundWrapper = styled.div`
  position: absolute;
  width: 25vw;
  height: 50vh;
  overflow: hidden;
  box-shadow: 1px 1px 5px 1px grey;
  // [h-offset] [v-offset] [blur] [spread] [color]
`;

const ProfileWrapper = styled.div`
  position: relative;
  width: 25vw;
  height: 50vh;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.3);
`;

export default function Banner() {
  return (
    <Container>
      <BackgroundWrapper>
        <video width="1000px" autoPlay loop muted>
          <source src="/videos/Ocean.mp4" type="video/mp4" />
          cannot find any videos
        </video>
      </BackgroundWrapper>
      <ProfileWrapper></ProfileWrapper>
    </Container>
  );
}
