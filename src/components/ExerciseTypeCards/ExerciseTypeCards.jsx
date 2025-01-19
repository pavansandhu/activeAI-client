import indoorCycle from "../../assets/images/image_fx_indoorcycle.jpg";

function ExerciseTypeCards({ handleCardClick, selectedOption }) {
  console.log("selectedOption", selectedOption);

  return (
    <>
      <section className="exerciseType__cards">
        <div
          onClick={() => handleCardClick("indoor cycle")}
          className="exerciseType__bike"
        >
          <h3 className="exerciseType__text">Bike</h3>
          <img src={indoorCycle} alt="indoor cycle" />
        </div>
        {/* <div
          onClick={() => handleCardClick("treadmill run")}
          className="exerciseType__run"
        >
          <h3 className="exerciseType__text">Run</h3>
          <img src={run} alt="treadmill run" />
        </div>

        <div
          onClick={() => handleCardClick("swim")}
          className="exerciseType__run"
        >
          <h3 className="exerciseType__text">Swim</h3>
          <img src={swim} alt="swim workout" />
        </div> */}
      </section>
    </>
  );
}

export default ExerciseTypeCards;
