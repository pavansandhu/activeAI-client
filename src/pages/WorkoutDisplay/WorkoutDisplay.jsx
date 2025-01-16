// import "WorkoutDisplay.scss";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import WorkoutDisplayList from "../../components/WorkoutDisplayList/WorkoutDisplayList";

import { useState } from "react";

function WorkoutDisplay(props) {
  const location = useLocation();
  const data = location.state;
  console.log(data.workoutData);

  const { workoutTitle, warmup, mainSets, cooldown, additionalNotes } =
    data.workoutData;
  console.log(mainSets[0].intervals[0]);

  return (
    <>
      <Header />
      <div className="wd__container">
        <h1>{workoutTitle.title}</h1>
        <h2>Warmup</h2>
        <div className="wd__warmup-container">
          <p className="wd__warmup-text">{warmup.duration}</p>
          <p className="wd__warmup-text">{warmup.description}</p>
        </div>
        <h2>Main Set</h2>
        <div className="wd__mainset-container">
          <ul className="wd__mainset-list">
            {mainSets.map((set, index) => {
              return <WorkoutDisplayList key={index} set={set} />;
            })}
          </ul>
        </div>
        <h2>Cool Down</h2>
        <div className="wd__cooldown-container">
          <p className="wd__cooldown-text">{cooldown.duration}</p>
          <p className="wd__cooldown-text">{cooldown.description}</p>
        </div>
      </div>
      <div className="wd__notes-container">
        <p className="wd__additional-text">{additionalNotes.description}</p>
      </div>
      <button className="startworkout" onClick={() => setShowModal(true)}>
        Start workout
      </button>
    </>
  );
}

export default WorkoutDisplay;
