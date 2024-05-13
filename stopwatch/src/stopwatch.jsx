
import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    // setInterval to increment the time every second when the stopwatch is active.
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handleStop = () => {
    setIsActive(false);
    //clearInterval to stop the interval timer when the stopwatch is stopped or reset
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    //clearInterval to stop the interval timer when the stopwatch is stopped or reset
    clearInterval(intervalRef.current);
    setTime(0);
    setIsActive(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds}`;

  };

  return (
    <div className="stopwatch" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <div className="controls" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        {!isActive ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <button onClick={handleStop}>Stop</button>
        )}
        <button onClick={handleReset} >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
