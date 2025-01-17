import "./Timer.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Timer() {
  const location = useLocation();
  const data = location.state;
  const percentage = 66;

  if (!data) {
    return null;
  }

  console.log(data.workoutData);
  const {
    workoutTitle,
    workoutFocus,
    workoutDuration,
    warmup,
    mainSets,
    cooldown,
    additionalNotes,
  } = data.workoutData;

  return (
    <>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />;
      <h1>{workoutDuration.duration}</h1>
      <h2>{warmup.duration}</h2>
      {/* <div className="test">
        <h1>{time}</h1>
        <button>Start</button>
      </div> */}
      {/* <div className="main__container center ">
        <div className="circle__container center">
          <div className="semicircle"></div>
          <div className="semicircle"></div>
          <div className="semicircle"></div>
          <div className="outermost-circle"></div>
        </div>
      </div> */}
      {/* <div className="skill">
        <div className="outercircle">
          <div className="innercircle">
            <div className="number"></div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Timer;
