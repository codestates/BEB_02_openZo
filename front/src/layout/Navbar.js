import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Form, Button, Input, Space } from 'antd';
import { SearchOutlined, WalletOutlined } from '@ant-design/icons';

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
  /* border-bottom: 2px solid;
  border-color: rgba(0, 0, 0, 0.1); */
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
  margin-right: 3rem;
  display: flex;
  justify-content: space-between;
`;

const StyledSearchInput = styled.div`
  width: 100%;
  border-bottom: 1.5px solid;
  border-color: rgba(57, 102, 249, 0.5);
  margin-right: 0.3rem;
`;

export default function Navbar() {
  // Logo
  // search
  // explore
  // create
  // myNFT / connect (icon)
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
        <Button shape="round" icon={<WalletOutlined />}>
          Connect
        </Button>
      </RightItems>
    </Container>
  );
}
