import React from 'react';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import styled from 'styled-components';
import { Button, message } from 'antd';
import { WalletOutlined, PictureOutlined } from '@ant-design/icons';
import SearchForm from '../components/form/SearchForm';
<<<<<<< HEAD

const Container = styled.div`
  height: 7vh;
  min-height: 4rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem 0 1.5rem;
`;
=======
>>>>>>> af6982c (:twisted_rightwards_arrows: merge05)

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

export default function Navbar({
  web3,
  setUserAddress,
  setWeb3,
  setSearchWord,
}) {
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
          <Button shape="round" onClick={ethEnabled} icon={<WalletOutlined />}>
            Connect
          </Button>
        )}
      </RightItems>
    </Container>
  );
}
