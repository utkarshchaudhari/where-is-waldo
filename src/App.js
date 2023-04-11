import { useState } from 'react';
import Footer from './components/Footer';
import Game from './components/Game';
import Header from './components/Header';
import Modal from './components/Modal';
import './style.css';

function App() {
  const [list, setList] = useState(['Bowser', 'Yubaba', 'The Knight']);
  const [modal, setModal] = useState(true);

  function updateList(itemName) {
    setList((list) => list.filter((item) => item !== itemName));
  }

  function toggleModal() {
    setModal(false);
  }

  return (
    <div className="App">
      <Header number={list.length} />
      <Game list={list} updateList={updateList} />
      {modal && <Modal toggleModal={toggleModal} />}
      <Footer />
    </div>
  );
}

export default App;
