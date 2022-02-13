import React, { useState } from 'react';
import { Row, Col, Input, Form, Button } from 'antd';
import styled from 'styled-components';
import ProfileBackground from '../components/ProfileBackground';
import { SendOutlined } from '@ant-design/icons';

const HeadSection = styled.h1`
  height: 15vh;
  /* text-align: center; */
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
  /* border: 1px solid; */
`;

const ProfileInputWrapper = styled.div`
  width: 25vw;
  margin-left: 4rem;
  margin-top: 3rem;
  /* border: 1px solid; */
`;

const StyledInput = styled.div`
  border-bottom: 1.5px solid;
  /* border-right: 1.5px solid; */
  border-color: rgba(57, 102, 249, 0.5);
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -2rem;
`;
const StyledDescription = styled.div``;

export default function Create() {
  // name, description
  // upload 하면 state에 file을 저장할 수 있다.

  return (
    <>
      <HeadSection>Create your NFT</HeadSection>
      <Row>
        <Col span={12}>
          <ProfileImageWrapper>
            <ProfileBackground />
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
          {/* <ProfileInputWrapper>
            <StyledInput>
              <Input placeholder="Borderless" bordered={false} />
            </StyledInput>
            <div>123</div>
            <StyledInput>
              <TextArea
                placeholder="Borderless"
                bordered={false}
                autoSize={{ minRows: 5, maxRows: 5 }}
              />
            </StyledInput>
          </ProfileInputWrapper> */}
        </Col>
      </Row>
    </>
  );
}
