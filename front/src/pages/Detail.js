import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Row, Col } from "antd";

import ProfileBackground from "../components/banner/ProfileBackground";
import TransferModalButton from "../components/detail/TransferModalButton";

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

export default function Detail() {
  const params = useParams();

  const handleTransferClick = () => {
    // modal transfer
  };

  return (
    <>
      <HeadSection>Name #number</HeadSection>

      <Row>
        <Col span={12}>
          <ProfileWrapper>
            <ProfileBackground />
            {/* profile 이미지 */}
          </ProfileWrapper>
        </Col>

        <Col span={12}>
          <DescriptionWrapper>
            <StyledBy>
              <span>ownered by</span>
              <br />
              <span>0x7F8c72AdEa14269A2c8291de1B24C4e3B1657aab</span>
              {/* <span>created by ...</span>
              <br /> */}
            </StyledBy>
            <StyledDescriptionHeader>discription</StyledDescriptionHeader>
            <StyledDescriptionContent>
              <p>
                lorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor
                sit amet, consectetur adipislorem ipsum dolor sit amet,
                consectetlor sit amet, consectetur adipislorem ipsum dolor sit
                amet, consectetur adipislorem ipsum dolor sit amet, consectet
              </p>
            </StyledDescriptionContent>

            <TransferModalButton />
          </DescriptionWrapper>
        </Col>
      </Row>
    </>
  );
}
