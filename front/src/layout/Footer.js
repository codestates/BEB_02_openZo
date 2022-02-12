import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

export default function Footer() {
  const StyledFooter = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);
    /* backdrop-filter: blur(10px); */
  `;

  const StyledA = styled.a`
    color: black;
  `;

  return (
    <StyledFooter>
      <span>©2022 Created by Team OpenZo</span>&nbsp;
      <StyledA
        href="https://github.com/codestates/BEB_02_openZo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubOutlined />
      </StyledA>
    </StyledFooter>
  );
}
