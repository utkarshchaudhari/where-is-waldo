import React, { useState, useEffect } from 'react';

function Timer({ timeIsRunning }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalID;

    if (timeIsRunning) {
      intervalID = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [timeIsRunning]);

  const minutes = `0${Math.floor(time / 60)}`.slice(-2);
  const hours = `0${Math.floor(time / 3600)}`.slice(-2);

  return (
    <div>
      {hours}:{minutes}:{`0${time % 60}`.slice(-2)}
    </div>
  );
}

export default Timer;
