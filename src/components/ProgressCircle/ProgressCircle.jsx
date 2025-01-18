import "../ProgressCircle/ProgressCircle.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressCircle() {
  return (
    <>
      <div className="progressbar">
        <CircularProgressbar value={60} text={`${60}%`} />
      </div>
    </>
  );
}

export default ProgressCircle;
