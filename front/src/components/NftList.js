import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import NFTCard from './NFTCard';

const NFTCards = styled.div`
  width: 100%;
  padding: 2rem 8.5rem 8rem 8.5rem;
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
  // TODO: page 줄이면 card 줄 수 줄이기
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate('/detail/' + id);
  };

  return (
    <>
      <Outlet />
      <NFTCards>
        <Row>
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
    </>
  );
}
