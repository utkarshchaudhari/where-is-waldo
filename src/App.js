import { useState, useRef } from 'react';
import Footer from './components/Footer';
import Game from './components/Game';
import Header from './components/Header';
import Modal from './components/Modal';
import RestartModal from './components/RestartModal';
import './style.css';

function App() {
  const [list, setList] = useState(['Bowser', 'Yubaba', 'The Knight']);
  const [modal, setModal] = useState(true);
  const [restartModal, setRestartModal] = useState(false);
  const [timeIsRunning, setTimeIsRunning] = useState(false);
  const timeRef = useRef();

  function updateList(itemName) {
    setList((list) => list.filter((item) => item !== itemName));

    if (list.length === 1) {
      setTimeIsRunning(false);
      setRestartModal(true);
    }
  }

  function startGame() {
    setModal(false);
    setTimeIsRunning(true);
  }

  function restartGame() {
    setList(['Bowser', 'Yubaba', 'The Knight']);
    setTimeIsRunning(false);
    setRestartModal(false);
    setModal(true);
  }

  return (
    <div className="App">
      <Header
        list={list}
        timeIsRunning={timeIsRunning}
        timeRef={timeRef}
        restartGame={restartGame}
      />
      <Game list={list} updateList={updateList} />
      {modal && <Modal startGame={startGame} />}
      {restartModal && (
        <RestartModal
          time={timeRef.current.textContent}
          restartGame={restartGame}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
