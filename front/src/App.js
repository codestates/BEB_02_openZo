import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Gallery from './pages/Gallery';
import Create from './pages/Create';
import Detail from './pages/Detail';
import MyNft from './pages/MyNft';
import Search from './pages/Search';

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

  // TODO: search 시 Gallery로 filtered List 보내주고 view 하게 하기

  useEffect(() => {
    if (web3) {
      // TODO: contract state 생성
      // const nftContract = new web3.eth.Contract(
      //   contractAbi,
      //   '0xEB0cf0EcE4aDA7eb5Bb5ef7D34f6F6449f249cAa'
      // );
      // setContract(nftContract);
      // TODO: NFT list state 생성
    }
  }, [web3]);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Navbar
        web3={web3}
        setUserAddress={setUserAddress}
        setWeb3={setWeb3}
        setSearchWord={setSearchWord}
      />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/explore" element={<Gallery />} />
        <Route path="/create" element={<Create userAddress={userAddress} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/mynft" element={<MyNft />} />
        <Route path="/search" element={<Search searchWord={searchWord} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
