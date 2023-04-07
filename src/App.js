import { useState } from 'react';
import Footer from './components/Footer';
import Game from './components/Game';
import Header from './components/Header';
import './style.css';

function App() {
  const [list, setList] = useState(['Bowser', 'Yubaba', 'The Knight']);

  function updateList(itemName) {
    setList((list) => list.filter((item) => item !== itemName));
  }

  return (
    <div className="App">
      <Header number={list.length} />
      <Game list={list} updateList={updateList} />
      <Footer />
    </div>
  );
}

export default App;
