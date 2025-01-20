import "../ExerciseTypeCards/ExerciseTypeCards.scss";

function ExerciseTypeCards({ handleCardClick, selectedOption }) {
  // console.log("selectedOption", selectedOption);

  return (
    <>
      <section className="exerciseType__cards">
        <article className="exerciseType__bike">
          <div
            onClick={() => handleCardClick("indoor cycle")}
            className="exerciseType__container exerciseType__container--indoorbike"
          >
            <h3 className="exerciseType__headerText">Indoor Cycling</h3>
            {/* <p className="exerciseType__description">
              You have access to a spin bike or turbo trainer
            </p> */}
          </div>
          <div
            onClick={() => handleCardClick("outdoor cycle")}
            className="exerciseType__container exerciseType__container--outdoorbike"
          >
            <h3 className="exerciseType__headerText">Outdoor Cycling</h3>
            {/* <p className="exerciseType__text">
              Any bike riding outside will do but a road bike is best!
            </p> */}
            {/* <img src={outdoorcycle} alt="indoor cycle" /> */}
          </div>
        </article>
        <article className="exerciseType__run">
          <div
            onClick={() => handleCardClick("treadmill run")}
            className="exerciseType__container exerciseType__container--treadmill"
          >
            <h3 className="exerciseType__headerText">Treadmill Run</h3>
            {/* <p className="exerciseType__text">Running inside on a treadmill.</p> */}
          </div>
          <div
            onClick={() => handleCardClick("outdoor run")}
            className="exerciseType__container exerciseType__container--outdoorRun"
          >
            <h3 className="exerciseType__headerText">Outdoor Run</h3>
            {/* <p className="exerciseType__text">Outdoor Run</p> */}
            {/* <img src={outdoorRun} alt="outdoor run" /> */}
          </div>
        </article>
        <article className="exerciseType__swim">
          <div
            onClick={() => handleCardClick("swim")}
            className="exerciseType__container exerciseType__container--swim"
          >
            <h3 className="exerciseType__headerText">Swim</h3>
            {/* <p className="exerciseType__text">Pool Swim</p> */}
            {/* <img src={swim} alt="swim workout" /> */}
          </div>
        </article>
      </section>
    </>
  );
}

export default ExerciseTypeCards;
