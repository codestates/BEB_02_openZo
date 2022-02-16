import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import Background from './Background';

const Container = styled.div``;

const BackgroundWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 85vh;
  box-shadow: 1px 1px 5px 1px grey;
  // [h-offset] [v-offset] [blur] [spread] [color]
`;

const CarouselWrapper = styled.div`
  position: relative;
  height: 85vh;

  backdrop-filter: blur(10px);
`;

const CarouselCard = styled.div`
  height: 85vh;
  width: 100vw;
  line-height: 85vh;
`;

const StyledImageDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  height: 30vw;
  object-fit: contain;
  /* width: 75; */
`;

export default function MainBanner({ nftList }) {
  // TODO: 영상 길이 줄이기 default image로 preload 가능한지 확인
  const [recentNftList, setRecentNftList] = useState([]);

  useEffect(() => {
    const recent = nftList?.slice(-4);
    if (recent) setRecentNftList([...recent]);
  }, [nftList]);

  return (
    <Container>
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
      <CarouselWrapper>
        <Carousel>
          {recentNftList.map((nft, i) => {
            if (i > 5) return;
            const src = nft.metadata.image;
            return (
              <CarouselCard key={i}>
                <StyledImageDiv>
                  <StyledImage src={src} />
                </StyledImageDiv>
              </CarouselCard>
            );
          })}
        </Carousel>
      </CarouselWrapper>
    </Container>
  );
}
