import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, message } from 'antd';
import { WalletOutlined, PictureOutlined } from '@ant-design/icons';
import SearchForm from '../components/form/SearchForm';

const Container = styled.div`
  height: 7vh;
  min-height: 4rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem 0 1.5rem;
`;

const LogoImage = styled.div`
  .logo {
    margin: 0.2rem 0 0 1rem;
    height: 1.8rem;
    object-fit: cover;
  }
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

export default function Navbar({ web3, ethEnabled, setSearchWord }) {
  const handleSearchButton = () => {};

  const handleConnectButton = async () => {
    try {
      await ethEnabled();
      message.success('Wallet connected !');
    } catch {
      message.error('Fail to connect');
    }
  };

  return (
    <Container>
      <LeftItems>
        <LogoImage>
          <Link to={'/'}>
            <img className="logo" alt="logo icon" src={'/images/logo.png'} />
          </Link>
        </LogoImage>
        <SearchForm setSearchWord={setSearchWord} />
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
          <Button
            shape="round"
            onClick={handleConnectButton}
            icon={<WalletOutlined />}
          >
            Connect
          </Button>
        )}
      </RightItems>
    </Container>
  );
}
