import "./WorkoutSelection.scss";
import Header from "../../components/Header/Header";
import WorkoutSelectionForm from "../../components/WorkoutSelectionForm/WorkoutSelectionForm";
import WorkoutDisplayList from "../../components/WorkoutDisplayList/WorkoutDisplayList";

function WorkoutSelection() {
  return (
    <>
      <div>
        <Header />
        <WorkoutSelectionForm />
        <WorkoutDisplayList />
      </div>
    </>
  );
}

export default WorkoutSelection;
