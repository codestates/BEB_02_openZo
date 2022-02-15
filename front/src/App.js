import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Web3 from 'web3';

import NFTcontract from '../src/data/contract';
import Main from './pages/Main';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Explore from './pages/Explore';
import Create from './pages/Create';
import Detail from './pages/Detail';
import MyNft from './pages/MyNft';
import Search from './pages/Search';
import NftList from './components/nft/NftList';
import NotFound from './components/result/NotFound';
import Success from './components/result/Success';
import ZCreate from './zeke/ZCreate';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  min-height: 87vh;
  flex: 1;
`;

function App() {
  // TODO: contract 객체 생성
  // TODO: flex 사용해서 footer 바닥에 붙이기
  // TODO: font 설정

  const [contract, setContract] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [nftList, setNftList] = useState([]);
  const [filteredNftList, setFilteredNftList] = useState([]);
  const [userAddress, setUserAddress] = useState('');
  const [searchWord, setSearchWord] = useState('');

  const ethEnabled = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    setUserAddress(accounts[0]);
    const newWeb3 = new Web3(window.ethereum);
    console.log(newWeb3);
    setWeb3(newWeb3);
  };

  // TODO: search 시 Gallery로 filtered List 보내주고 view 하게 하기

  useEffect(() => {
    console.log(window.ethereum);
    console.log(window.ethereum.selectedAddress);
    if (window.ethereum.selectedAddress) ethEnabled();
  }, []);

  useEffect(() => {
    if (web3 && !contract) {
      const nftContract = new web3.eth.Contract(
        NFTcontract.abi,
        NFTcontract.address
      );
      setContract(nftContract);
    }
  }, [web3]);

  useEffect(() => {
    if (contract) {
      // TODO: NFT list state 생성
    }
  }, [contract]);

  return (
    <Container>
      <Navbar
        web3={web3}
        ethEnabled={ethEnabled}
        setSearchWord={setSearchWord}
      />

      <ContentWrapper>
        <Routes>
          <Route exact path="/" element={<Main />} />
          {/* <Route
            path="/create"
            element={<Create userAddress={userAddress} />}
          /> */}
          <Route
            path="/create"
            element={<ZCreate userAddress={userAddress} />}
          />
          <Route path="/detail/:id" element={<Detail />} />
          <Route element={<NftList />}>
            <Route path="/explore" element={<Explore />} />
            <Route path="/mynft" element={<MyNft />} />
            <Route
              path="/search"
              element={<Search searchWord={searchWord} />}
            />
          </Route>
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContentWrapper>

      <Footer />
    </Container>
  );
}

export default App;
