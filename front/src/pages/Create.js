import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Input, Form, Button, Tooltip, message } from 'antd';
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
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  margin-right: 1rem;
`;

export default function Create({ userAddress }) {
  // TODO: Submit 시 require 알림 띄워주기
  // TODO: onFinish 함수로 control
  // TODO: issue DB에 넣는 로직
  // TODO: tx 보내서 contrack storage에 tokenURI 넣는 로직
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    if (image) URL.revokeObjectURL(image);

    const images = e.target.files;
    const imageUrl = URL.createObjectURL(images[0]);

    setImage(images[0]);
    setPreview(imageUrl);
  };

  const handleSubmitFinish = (values) => {
    if (values.name && image) {
      console.log(123);
      const valuesObj = {
        name: values.name,
        discription: values.discription ?? '',
        ipfs: null,
        address: userAddress,
      };

      const nftJSON = JSON.stringify(valuesObj);

      fetch('https://api.github.com/repos/2-now/minted-NFT/issues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'token ' + process.env.REACT_APP_GIT_ISSUE_TOKEN,
        },
        body: JSON.stringify({
          title: values.name,
          body: nftJSON,
        }),
      }).then(() => {
        navigate('/success');
      });
    } else {
      if (!image) message.error('required NFT image');
      if (!values.name) message.error('required NFT name');
    }
  };

  useEffect(() => {
    return () => {
      setPreview(null);
      setImage(null);
      URL.revokeObjectURL(image);
    };
  }, []);

  return (
    <>
      <HeadSection>Create your NFT</HeadSection>
      <Row>
        <Col span={12}>
          <ProfileImageWrapper>
            <ProfileImagePosition>
              <ProfileBackground />
            </ProfileImagePosition>

            <StyledLabel htmlFor="input-file">
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
            <Form layout="vertical" onFinish={handleSubmitFinish}>
              <Form.Item label="name" name="name" required>
                <StyledInput>
                  <Input placeholder="Write your NFT name" bordered={false} />
                </StyledInput>
              </Form.Item>
              <br />
              <Form.Item label="description" name="description">
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
                  {userAddress ? (
                    <Button
                      shape="round"
                      htmlType="submit"
                      icon={<SendOutlined />}
                    >
                      Create
                    </Button>
                  ) : (
                    <Tooltip title="Connect wallet first" color={'red'}>
                      <Button
                        shape="round"
                        htmlType="submit"
                        disabled
                        icon={<SendOutlined />}
                      >
                        Create
                      </Button>
                    </Tooltip>
                  )}
                </StyledButton>
              </Form.Item>
            </Form>
          </ProfileInputWrapper>
        </Col>
      </Row>
    </>
  );
}
