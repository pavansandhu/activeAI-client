import "./WorkoutSelection.scss";
import Header from "../../components/Header/Header";
import WorkoutSelectionForm from "../../components/WorkoutSelectionForm/WorkoutSelectionForm";
import WorkoutDisplay from "../WorkoutDisplay/WorkoutDisplay";

function WorkoutSelection() {
  return (
    <>
      <div>
        <WorkoutSelectionForm />
      </div>
    </>
  );
}

export default WorkoutSelection;
