import React from 'react';
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

export default function Banner() {
  const contentStyle = {
    height: '100%',
    color: '#fff',
    lineHeight: '85vh',
    textAlign: 'center',
    background: 'rgba(0,0,0,0.3)',
  };

  // TODO: NFT 몇개 불러와서 넣어주고 Carousel에 표시
  // TODO: 영상 길이 줄이기 default image로 preload 가능한지 확인
  return (
    <Container>
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
      <CarouselWrapper>
        <Carousel>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </CarouselWrapper>
    </Container>
  );
}
