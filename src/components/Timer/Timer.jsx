import "./Timer.scss";
import TimerComponent from "../TimerComponent/TimerComponent";
import { useRef, useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import WorkoutDisplayPortal from "../WorkoutDisplayPortal/WorkoutDisplayPortal";

function Timer() {
  //getting data from workout display

  const location = useLocation();
  const data = location.state;

  if (!data) {
    return null;
  }

  const { workoutDuration, warmup, mainSets, cooldown } = data.workoutData;

  const workout = useMemo(() => {
    //map warmup
    const warmupStage = {
      name: "Warmup",
      duration: warmup.duration * 60,
      description: warmup.description,
    };
    //map mainSets and their intervals
    const mainSetsStages = mainSets.flatMap((set, index) =>
      set.intervals.map((interval, intervalIndex) => ({
        name: `Mainset Interval ${index + 1}-${intervalIndex + 1}`,
        repetitions: set.repetitions,
        duration: interval.duration * 60,
        description: interval.description,
      }))
    );

    const coolDownStage = {
      name: "Cooldown",
      duration: cooldown.duration * 60,
      description: cooldown.description,
    };

    return [warmupStage, ...mainSetsStages, coolDownStage];
  }, [warmup, mainSets, cooldown]);
  console.log(workout);
  //countdown timer creation

  return (
    <>
      {/* <CircularProgressbar value={percentage} text={`${percentage}%`} />; */}
      <div className="workout-player__container">
        <TimerComponent workout={workout} />
        {/* <WorkoutDisplayPortal /> */}
      </div>
    </>
  );
}

export default Timer;
