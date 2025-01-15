import "./WorkoutDisplayList.scss";

function WorkoutDisplayList(props) {
  console.log(props);
  const repetitions = props.set.repetitions;
  const intervals = props.set.intervals;

  function isRepeated() {
    if (repetitions !== 0) true;
  }

  console.log(repetitions);
  console.log(intervals);

  return (
    <section className="mainset__section">
      <div className="mainset__container">
        <ul className="mainset__list">
          <h2
            className={`mainset__repetitions ${
              isRepeated() ? "" : "mainset__norepetitions"
            }`}
          >
            {repetitions}
          </h2>
          {intervals.map((interval, index) => (
            <li key={interval.id}>
              <p className="mainset__duration">{interval.duration}</p>
              <p className="mainset__description">{interval.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WorkoutDisplayList;
