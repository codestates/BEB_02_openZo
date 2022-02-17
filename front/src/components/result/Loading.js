import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import styled from 'styled-components';
import Background from '../banner/Background';

const BannerPosition = styled.div`
  position: absolute;
  width: 100vw;
  height: 85vh;
  box-shadow: 1px 1px 5px 1px grey;
`;

const SpinPosition = styled.div`
  position: relative;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
`;

const StyledH1 = styled.h1`
  color: rgba(255, 255, 255, 0.7);
  font-size: 2.3rem;
`;

const StyledSpin = styled.div`
  margin-top: 3rem;
`;

export default function Loading() {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: '4rem', color: 'white' }} spin />
  );

  return (
    <>
      <BannerPosition>
        <Background />
      </BannerPosition>
      <SpinPosition>
        <StyledH1>Data is being fetched</StyledH1>
        <StyledSpin>
          <Spin indicator={antIcon} />
        </StyledSpin>
      </SpinPosition>
    </>
  );
}
