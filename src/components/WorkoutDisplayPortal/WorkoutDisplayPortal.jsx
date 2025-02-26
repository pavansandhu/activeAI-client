import "./WorkoutDisplayPortal.scss";
import WorkoutDisplayList from "../../components/WorkoutDisplayList/WorkoutDisplayList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function WorkoutDisplayPortal({ workoutData, onClose }) {
  // console.log(props);

  // const workoutData = props.workoutData;
  if (!workoutData) {
    return null;
  }
  // console.log(workoutData);

  const { workoutTitle, warmup, mainSets, cooldown, additionalNotes } =
    workoutData;

  const navigate = useNavigate();

  const handleStartClick = (e) => {
    e.preventDefault();
    navigate("/start-workout", { state: { workoutData: workoutData } });
  };

  return (
    <>
      <div className="wd__container">
        <h1>{workoutTitle.title}</h1>
        <h2 className="wd__warmup-text">Warmup</h2>
        <div className="wd__warmup-container">
          <p className="wd__warmup-text">{warmup.duration} minutes</p>
          <p className="wd__warmup-text">{warmup.description}</p>
        </div>
        <h2 className="wd__warmup-text">Main Set</h2>
        <div className="wd__mainset-container">
          <ul className="wd__mainset-list">
            {mainSets.map((set, index) => {
              return <WorkoutDisplayList key={index} set={set} />;
            })}
          </ul>
        </div>
        <h2 className="wd__warmup-text">Cool Down</h2>
        <div className="wd__cooldown-container">
          <p className="wd__cooldown-text">{cooldown.duration} minutes</p>
          <p className="wd__cooldown-text">{cooldown.description}</p>
        </div>

        <div className="wd__notes-container">
          <p className="wd__additional-text">{additionalNotes.description}</p>
        </div>

        <button className="wd__button" onClick={handleStartClick}>
          Start workout
        </button>
        <div className="modal" onClick={onClose}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="wd__button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkoutDisplayPortal;
