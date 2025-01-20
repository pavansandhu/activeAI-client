import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRef, useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import ProgressCircle from "../ProgressCircle/ProgressCircle";

function TimerComponent({ workout }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayTime, setDisplayTime] = useState(workout[0].duration);
  const [isRunning, setIsRunning] = useState(false);
  const timeRemaining = useRef(workout[0].duration);
  const timerRef = useRef(null);
  const stepIndex = useRef(0);
  const navigate = useNavigate();

  //   function handleStart() {
  //     setIsRunning(true);
  //   }
  //   function handlePause() {
  //     setIsRunning(false);
  //   }

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      timeRemaining.current -= 1;

      if (timeRemaining.current <= 0) {
        handleNextStep();
        return;
      }
      setDisplayTime(timeRemaining.current);
    }, 1000);
  };

  const toggleWorkout = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
    } else {
      startTimer();
    }
    setIsRunning(!isRunning);
  };

  function handleFastForward() {
    handleNextStep();
  }

  function handleReset() {
    clearInterval(timerRef.current);
    timeRemaining.current = workout[stepIndex.current].duration;
    setCurrentStep(stepIndex.current);
    setDisplayTime(timeRemaining.current);
  }

  const handleNextStep = () => {
    clearInterval(timerRef.current);
    if (stepIndex.current < workout.length - 1) {
      stepIndex.current += 1;
      timeRemaining.current = workout[stepIndex.current].duration;
      setCurrentStep(stepIndex.current);
      setDisplayTime(timeRemaining.current);

      if (isRunning) {
        startTimer();
      }
    } else {
      setIsRunning(false);
      navigate("/end-workout");
    }
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  function formatTime(timeRemaining) {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = Math.floor(timeRemaining % 60);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return `${minutes}:${seconds}`;
  }

  // const percentage = Math.round(timeRemaining.current / timerRef.current);
  // console.log(percentage);

  return (
    <div>
      <h2>{workout[currentStep].name}</h2>
      <h2>{workout[currentStep].description}</h2>
      <div className="timeranimationContainer">
        <h3>{formatTime(displayTime)}</h3>
        {/* <CircularProgressbar value={60} text={`${60}%`} /> */}
      </div>
      <button onClick={toggleWorkout} className="start">
        Start/Pause
      </button>
      <button onClick={handleFastForward} className="nextstep">
        Next Step
      </button>
      <button onClick={handleReset} className="reset">
        Reset Step
      </button>
    </div>
  );
}

export default TimerComponent;
