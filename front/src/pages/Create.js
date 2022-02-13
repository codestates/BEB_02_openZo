import React, { useState } from 'react';
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

const StyledLabel = styled.label`
  position: relative;
  width: 25vw;
  height: 50vh;
  /* border: 1px solid; */
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.5);
  /* margin: 0 auto; */
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
  // name, description
  // upload 하면 state에 file을 저장할 수 있다.
  // TODO: Submit 시 require 알림 띄워주기
  // TODO: onFinish 함수로 control
  // TODO: issue DB에 넣는 로직
  // TODO: tx 보내서 contrack storage에 tokenURI 넣는 로직
  const [image, setImage] = useState(null);

  const onChange = (e) => {
    setImage(e.target.files[0]);
  };

  //

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
              <PlusSquareFilled />
            </StyledLabel>
            <input type="file" id="input-file" style={{ display: 'none' }} />
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
