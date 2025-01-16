import "./WorkoutDisplayPortal.scss";
import { useLocation } from "react-router-dom";
import WorkoutDisplayList from "../../components/WorkoutDisplayList/WorkoutDisplayList";

import { useState } from "react";

function WorkoutDisplayPortal(props, { onClose }) {
  console.log(props);

  const data = props.workoutData;
  console.log(data);

  const { workoutTitle, warmup, mainSets, cooldown, additionalNotes } = data;

  return (
    <>
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
      <button className="close" onClick={onClose}>
        Close
      </button>
    </>
  );
}

export default WorkoutDisplayPortal;