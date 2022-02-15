import React from 'react';
import styled from 'styled-components';
import { GithubOutlined } from '@ant-design/icons';

const StyledFooter = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledA = styled.a`
  color: black;
`;

const NotionLogo = styled.img`
  margin-top: -3px;
  width: 16px;
  height: 16px;
`;

const NotionA = styled.a`
  :hover {
    transition: 0.3s;
    filter: invert(51%) sepia(27%) saturate(1545%) hue-rotate(183deg)
      brightness(97%) contrast(111%);
  }
`;

export default function Footer() {
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
      &nbsp;
      <NotionA
        href="https://2-now.notion.site/openZo-d13cf04a6aaa4f48a2c5e2f5dccd8bff"
        target="_blank"
        rel="noopener noreferrer"
      >
        <NotionLogo src="/images/notion-logo.png" />
      </NotionA>
    </StyledFooter>
  );
}
