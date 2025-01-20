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
          </div>
          <div
            onClick={() => handleCardClick("outdoor cycle")}
            className="exerciseType__container exerciseType__container--outdoorbike"
          >
            <h3 className="exerciseType__headerText">Outdoor Cycling</h3>
          </div>
        </article>
        <article className="exerciseType__run">
          <div
            onClick={() => handleCardClick("treadmill run")}
            className="exerciseType__container exerciseType__container--treadmill"
          >
            <h3 className="exerciseType__headerText">Treadmill Run</h3>
          </div>
          <div
            onClick={() => handleCardClick("outdoor run")}
            className="exerciseType__container exerciseType__container--outdoorRun"
          >
            <h3 className="exerciseType__headerText">Outdoor Run</h3>
          </div>
        </article>
        <article className="exerciseType__swim">
          <div
            onClick={() => handleCardClick("swim")}
            className="exerciseType__container exerciseType__container--swim"
          >
            <h3 className="exerciseType__headerText">Swim</h3>
          </div>
        </article>
      </section>
    </>
  );
}

export default ExerciseTypeCards;
