import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  query,
  orderBy,
  limit,
  collection,
  getDocs,
  addDoc,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

function RestartModal({ time, restartGame }) {
  const [doc, setDoc] = useState();
  const [showForm, setShowForm] = useState(false);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);

  useEffect(() => {
    async function getScores() {
      const q = query(collection(db, 'scores'), orderBy('time'), limit(10));
      const querySnapshot = await getDocs(q);
      const scoresArray = querySnapshot.docs.map((doc) => doc.data());
      setDoc(scoresArray);
    }

    getScores();
  }, []);

  useEffect(() => {
    if (doc && !scoreSubmitted && time < doc[doc.length - 1].time) {
      setShowForm(true);
    }
  }, [doc, time]);

  useEffect(() => {
    async function updateScores() {
      const q = query(collection(db, 'scores'), orderBy('time'), limit(10));
      const querySnapshot = await getDocs(q);
      const scoresArray = querySnapshot.docs.map((doc) => doc.data());
      setDoc(scoresArray);
    }
    if (scoreSubmitted) {
      updateScores();
    }
  }, [scoreSubmitted]);

  async function addScore(e) {
    e.preventDefault();
    addDoc(collection(db, 'scores'), {
      name: e.target.name.value,
      time: time,
    });
    e.target.reset();
    setShowForm(false);
    setScoreSubmitted(true);
  }

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
          {showForm ? (
            <form onSubmit={addScore}>
              <h3>Submit your score!</h3>
              <input
                type="text"
                name="name"
                placeholder="Name"
                minLength="3"
                maxLength="5"
                required
              />
              <input className="btn" type="submit" value="Submit" />
            </form>
          ) : (
            <button className="btn" onClick={restartGame}>
              Restart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RestartModal;
