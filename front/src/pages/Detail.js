import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import ProfileBackground from '../components/banner/ProfileBackground';
import TransferModalButton from '../components/detail/TransferModalButton';

const HeadSection = styled.h1`
  height: 15vh;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3rem;
`;

const ProfilePosition = styled.div`
  position: absolute;
`;

const ProfileImagePosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  position: relative;
  object-fit: contain;
  padding: 5rem 2rem 5rem 2rem;
  width: 25vw;
  height: 50vh;
`;

const DescriptionWrapper = styled.div`
  width: 25vw;
  margin-left: 4rem;
  margin-top: 2rem;
`;

const StyledDescriptionHeader = styled.h4`
  margin: 3rem 0 1rem 0;
`;

const StyledDescriptionContent = styled.div`
  max-height: 10rem;
  overflow: auto;
  padding: 0 1rem 1rem 1rem;
  border-bottom: 1.5px solid;
  border-color: rgba(57, 102, 249, 0.5);
`;

const StyledBy = styled.div`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.4);
`;

export default function Detail({ nftList, setSelectedNft }) {
  const params = useParams();
  console.log(params);
  console.log(nftList[params.id]);

  const handleTransferClick = () => {
    // modal transfer
  };

  useEffect(() => {
    return () => {
      setSelectedNft({});
    };
  }, []);

  const { tokenOwner, tokenId, metadata } = nftList[params.id];
  console.log(metadata);
  const { description, image, name } = metadata;

  return (
    <>
      <HeadSection>
        {name} #{tokenId}
      </HeadSection>

      <Row>
        <Col span={12}>
          <ProfileWrapper>
            <ProfilePosition>
              <ProfileBackground />
            </ProfilePosition>
            <ProfileImagePosition>
              <ProfileImage src={image} />
            </ProfileImagePosition>
          </ProfileWrapper>
        </Col>

        <Col span={12}>
          <DescriptionWrapper>
            <StyledBy>
              <span>ownered by</span>
              <br />
              <span>{tokenOwner}</span>
              {/* <span>created by ...</span>
              <br /> */}
            </StyledBy>
            <StyledDescriptionHeader>description</StyledDescriptionHeader>
            <StyledDescriptionContent>
              <p>{description}</p>
            </StyledDescriptionContent>

            <TransferModalButton />
          </DescriptionWrapper>
        </Col>
      </Row>
    </>
  );
}
