import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import Background from './Background';

const BackgroundWrapper = styled.div`
  width: 100vw;
  height: 45vh;
  box-shadow: 1px 1px 5px 1px grey;
  // [h-offset] [v-offset] [blur] [spread] [color]
`;

const CarouselWrapper = styled.div`
  height: 45vh;
  position: relative;
  top: -45vh;
  backdrop-filter: blur(10px);
`;

export default function Banner() {
  const contentStyle = {
    height: '100%',
    color: '#fff',
    lineHeight: '45vh',
    textAlign: 'center',
    background: 'rgba(0,0,0,0.3)',
  };

  return (
    <>
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
      <CarouselWrapper>
        <Carousel autoplay>
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
    </>
  );
}
