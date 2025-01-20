import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRef, useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../TimerComponent/TimerComponent.scss";
import play_pause from "../../assets/svg/play_pause.svg";
import skip_next from "../../assets/svg/skip_next.svg";
import restart from "../../assets/svg/restart.svg";
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
    <div className="timer__container">
      <h2 className="timer__currentstep">{workout[currentStep].name}</h2>
      <h3 className="timer__description">{workout[currentStep].description}</h3>
      <div className="timeranimationContainer">
        <h1 className="timer__duration">{formatTime(displayTime)}</h1>
        {/* <CircularProgressbar value={60} text={`${60}%`} /> */}
      </div>
      <div className="timer__buttons">
        <button onClick={handleFastForward} className="timer__button">
          <img src={skip_next} alt="next step" />
        </button>
        <button onClick={toggleWorkout} className="timer__button">
          <img src={play_pause} alt="toggle to play or pause" />
        </button>
        <button onClick={handleReset} className="timer__button">
          <img src={restart} alt="restart step" />
        </button>
      </div>
    </div>
  );
}

export default TimerComponent;
