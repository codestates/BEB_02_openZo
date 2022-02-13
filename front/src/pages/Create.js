import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Form, Button } from 'antd';
import styled from 'styled-components';
import ProfileBackground from '../components/ProfileBackground';
import { SendOutlined, PlusSquareFilled } from '@ant-design/icons';

const HeadSection = styled.h1`
  height: 15vh;
  font-size: 3rem;
  color: rgb(101, 136, 251);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3rem;
`;

const ProfileInputWrapper = styled.div`
  width: 25vw;
  margin-left: 4rem;
  margin-top: 3rem;
`;

const ProfileImagePosition = styled.div`
  position: absolute;
`;

const StyledImage = styled.img`
  position: relative;
  width: 15vw;
  height: 30vh;
  object-fit: contain;
`;

const StyledLabel = styled.label`
  position: relative;
  width: 25vw;
  height: 50vh;
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.div`
  border-bottom: 1.5px solid;
  border-color: rgba(57, 102, 249, 0.5);
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -2rem;
  margin-right: 1rem;
`;
const StyledDescription = styled.div``;

export default function Create() {
  // TODO: Submit 시 require 알림 띄워주기
  // TODO: onFinish 함수로 control
  // TODO: issue DB에 넣는 로직
  // TODO: tx 보내서 contrack storage에 tokenURI 넣는 로직
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (e) => {
    const images = e.target.files;
    const imageUrl = URL.createObjectURL(images[0]);
    setImage(images[0]);
    setPreview(imageUrl);
  };

  useEffect(() => {
    return () => {
      setPreview(null);
      setImage(null);
    };
  }, []);
  // image 들어오면 icon 없애기

  return (
    <>
      <HeadSection>Create your NFT</HeadSection>
      <Row>
        <Col span={12}>
          <ProfileImageWrapper>
            <ProfileImagePosition>
              <ProfileBackground />
            </ProfileImagePosition>

            <StyledLabel for="input-file">
              {preview ? <StyledImage src={preview} /> : <PlusSquareFilled />}
            </StyledLabel>
            <input
              type="file"
              id="input-file"
              accept="img/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </ProfileImageWrapper>
        </Col>

        <Col span={12}>
          <ProfileInputWrapper>
            <Form layout="vertical">
              <Form.Item label="name" required>
                <StyledInput>
                  <Input placeholder="Write your NFT name" bordered={false} />
                </StyledInput>
              </Form.Item>
              <Form.Item label="description">
                <StyledInput>
                  <Input.TextArea
                    placeholder="Describe your NFT"
                    bordered={false}
                    autoSize={{ minRows: 5, maxRows: 5 }}
                  />
                </StyledInput>
              </Form.Item>
              <Form.Item>
                <StyledButton>
                  <Button shape="round" icon={<SendOutlined />}>
                    Create
                  </Button>
                </StyledButton>
              </Form.Item>
            </Form>
          </ProfileInputWrapper>
        </Col>
      </Row>
    </>
  );
}
