import React from 'react';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import styled from 'styled-components';
import { Button, Input, message } from 'antd';
import {
  SearchOutlined,
  WalletOutlined,
  PictureOutlined,
} from '@ant-design/icons';

const LogoImage = styled.div`
  .logo {
    margin-top: 0.2rem;
    margin-left: 1rem;
    height: 1.8rem;
    object-fit: cover;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 1.5rem 0 1.5rem;
`;

const SearchWrapper = styled.div`
  display: flex;
  width: 25rem;
  margin-bottom: 0.5rem;
  margin-left: 3.5rem;
`;

const LeftItems = styled.div`
  display: flex;
`;

const RightItems = styled.div`
  width: 22rem;
  margin-right: 2rem;
  display: flex;
  justify-content: space-between;
`;

const StyledSearchInput = styled.div`
  width: 100%;
  border-bottom: 1.5px solid;
  border-color: rgba(57, 102, 249, 0.5);
  margin-right: 0.3rem;
`;

export default function Navbar({ web3, setUserAddress, setWeb3 }) {
  // TODO: Search 기능 컴포넌트로 분리
  // TODO: connect wallet 시 metamask 연결, myNFT 버튼으로 변경
  // myNFT / connect (icon)
  const ethEnabled = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setUserAddress(accounts[0]);
      const newWeb3 = new Web3(window.ethereum);
      setWeb3(newWeb3);
    } catch {
      message.error('Fail to connect');
    }
  };

  const handleSearchButton = () => {};

  return (
    <Container>
      <LeftItems>
        <LogoImage>
          <Link to={'/'}>
            <img className="logo" alt="logo icon" src={'/images/logo.png'} />
          </Link>
        </LogoImage>
        <SearchWrapper>
          <StyledSearchInput>
            <Input placeholder="Search NFTs" bordered={false} />
          </StyledSearchInput>
          <Button shape="circle" icon={<SearchOutlined />} />
        </SearchWrapper>
      </LeftItems>
      <RightItems>
        <Link to="/explore">
          <Button type="link">Explore</Button>
        </Link>
        <Link to="/create">
          <Button type="link">Create</Button>
        </Link>
        {web3 ? (
          <Link to="/mynft">
            <Button shape="round" icon={<PictureOutlined />}>
              MyNFT
            </Button>
          </Link>
        ) : (
          <Button shape="round" onClick={ethEnabled} icon={<WalletOutlined />}>
            Connect
          </Button>
        )}
      </RightItems>
    </Container>
  );
}
