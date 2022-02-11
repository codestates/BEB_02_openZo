import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Explore from './pages/Explore';
import Create from './pages/Create';
import Detail from './pages/Detail';
import MyNft from './pages/MyNft';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/mynft" element={<MyNft />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
