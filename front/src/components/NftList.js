import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import NFTCard from './NFTCard';

const NFTCards = styled.div`
  /* margin-top: 2rem; */
  margin: 0 4rem 0 4rem;
`;
const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

export default function NftList() {
  // TODO: App -> Gallery -> NftList
  // TODO: nft list 받아서 map으로 표시해주기

  // TODO: Card click 시 detail:id page로 들어가기

  return (
    <NFTCards>
      <Row gutter={0}>
        <Col span={6}>
          <StyledCard>
            <NFTCard />
          </StyledCard>
        </Col>
        <Col span={6}>
          <StyledCard>
            <NFTCard />
          </StyledCard>
        </Col>
        <Col span={6}>
          <StyledCard>
            <NFTCard />
          </StyledCard>
        </Col>
        <Col span={6}>
          <StyledCard>
            <NFTCard />
          </StyledCard>
        </Col>
        <Col span={6}>
          <StyledCard>
            <NFTCard />
          </StyledCard>
        </Col>
        <Col span={6}>
          <StyledCard>
            <NFTCard />
          </StyledCard>
        </Col>
      </Row>
    </NFTCards>
  );
}
