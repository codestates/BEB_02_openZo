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
import Loading from './components/result/Loading';

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
  const [viewList, setViewList] = useState([]);
  const [selectedNft, setSelectedNft] = useState(null);
  const [myNftList, setMyNftList] = useState([]);
  const [searchedNftList, setSearchedNftList] = useState([]);
  const [userAddress, setUserAddress] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const ethEnabled = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    setUserAddress(accounts[0]);
    const newWeb3 = new Web3(window.ethereum);
    setWeb3(newWeb3);
  };

  const updateNFTlist = async (contract) => {
    const totalSupply = await contract.methods.totalSupply().call();

    const arr = Array(Number(totalSupply))
      .fill(1)
      .map((x, y) => x + y);

    setIsLoading(true);
    for await (const tokenId of arr) {
      const tokenOwner = await contract.methods.ownerOf(tokenId).call();
      const tokenURI = await contract.methods.tokenURI(tokenId).call();
      const metadata = await fetch(tokenURI).then((res) => res.json());
      setNftList((prevState) => {
        return [...prevState, { tokenOwner, tokenId, metadata }];
      });
    }
    setIsLoading(false);
  };

  useEffect(async () => {
    if (window.ethereum.selectedAddress) ethEnabled();
    return () => {
      setNftList([]);
    };
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

  useEffect(async () => {
    if (contract) {
      updateNFTlist(contract);
    }
  }, [contract]);

  useEffect(() => {}, []);

  return (
    <Container>
      <Navbar
        web3={web3}
        nftList={nftList}
        setViewList={setViewList}
        ethEnabled={ethEnabled}
        setSearchWord={setSearchWord}
      />

      <ContentWrapper>
        {isLoading ? (
          <Loading />
        ) : (
          <Routes>
            <Route exact path="/" element={<Main nftList={nftList} />} />
            <Route
              path="/create"
              element={
                <Create
                  contract={contract}
                  userAddress={userAddress}
                  web3={web3}
                />
              }
            />
            <Route
              path="/detail/:id"
              element={
                <Detail
                  nftList={nftList}
                  selectedNft={selectedNft}
                  setSelectedNft={setSelectedNft}
                />
              }
            />
            <Route
              element={
                <NftList viewList={viewList} setSelectedNft={setSelectedNft} />
              }
            >
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
        )}
      </ContentWrapper>

      <Footer />
    </Container>
  );
}

export default App;
