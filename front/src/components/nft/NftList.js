import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
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

export default function NftList({ viewList, setSelectedNft }) {
  return (
    <>
      <Outlet />
      <NFTCards>
        <Row>
          {viewList.map((nft) => {
            const { metadata, tokenId } = nft;
            return (
              <Col span={6}>
                <StyledCard>
                  <NFTCard
                    key={tokenId}
                    image={metadata.image}
                    name={metadata.name}
                    tokenId={tokenId}
                    description={metadata.description}
                    setSelectedNft={setSelectedNft}
                  />
                </StyledCard>
              </Col>
            );
          })}
        </Row>
      </NFTCards>
    </>
  );
}
