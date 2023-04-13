import React from 'react';

function RestartModal({ time, restartGame }) {
  return (
    <div id="modal">
      <div className="modal_container">
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
