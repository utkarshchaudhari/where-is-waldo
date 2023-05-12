import React, { useState, useEffect } from 'react';

function Timer({ timeIsRunning, timeRef }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalID;

    if (timeIsRunning) {
      intervalID = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      setTime(0);
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [timeIsRunning]);

  const minutes = Math.floor(time / 60);
  const hours = `0${Math.floor(time / 3600)}`.slice(-2);

  return (
    <div ref={timeRef}>
      {hours}:{`0${minutes % 60}`.slice(-2)}:{`0${time % 60}`.slice(-2)}
    </div>
  );
}

export default Timer;
