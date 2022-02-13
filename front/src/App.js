import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Gallery from './pages/Gallery';
import Create from './pages/Create';
import Detail from './pages/Detail';
import MyNft from './pages/MyNft';

function App() {
  // TODO: 지갑 연결
  // TODO: contract 객체 생성
  // TODO: flex 사용해서 footer 바닥에 붙이기
  // TODO: font 설정

  // TODO: State : contract, web3, nft list
  const [contract, setContract] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [nftList, setNftList] = useState([]);

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/explore" element={<Gallery />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/mynft" element={<MyNft />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
