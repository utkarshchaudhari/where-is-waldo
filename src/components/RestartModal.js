import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { query, orderBy, limit, collection, getDocs } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

function RestartModal({ time, restartGame }) {
  const [doc, setDoc] = useState();

  useEffect(() => {
    async function getScores() {
      const q = query(collection(db, 'scores'), orderBy('time'), limit(10));
      const querySnapshot = await getDocs(q);
      const scoresArray = querySnapshot.docs.map((doc) => doc.data());
      setDoc(scoresArray);
    }

    getScores();
  }, []);

  return (
    <div id="modal">
      <div className="modal_container">
        <div className="highscore_container">
          <h1>High Scores</h1>
          <div className="highscores_list">
            <ol className="leader_name">
              {doc &&
                doc.map((score) => (
                  <li key={uuidv4()}>
                    {score.name.toUpperCase()} {score.time}
                  </li>
                ))}
            </ol>
          </div>
        </div>
        <div className="right_container">
          <h1>Time</h1>
          <h2>{time}</h2>
          <button className="btn" onClick={restartGame}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestartModal;
