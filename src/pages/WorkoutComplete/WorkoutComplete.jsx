import "../WorkoutComplete/WorkoutComplete.scss";

function WorkoutComplete() {
  return (
    <>
      <section className="workout__completed-section">
        <div className="workout__complete-container">
          <h1 className="workout__complete-text">
            Congrats! You finished a workout!
          </h1>
          <h1 className="workout__complete-text">
            Click Below to Save to your Profile (Coming Soon!){" "}
          </h1>
        </div>
      </section>
    </>
  );
}

export default WorkoutComplete;
