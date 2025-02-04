import ".WorkoutDisplayList.scss";

function WorkoutDisplayList(props) {
  console.log(props);
  const repetitions = props.set.repetitions;
  const intervals = props.set.intervals;

  function isRepeated() {
    if (repetitions !== 0) true;
  }

  return (
    <section className="mainset__section">
      <div className="mainset__container">
        <ul className="mainset__list">
          <h2
            className={`mainset__repetitions ${
              isRepeated() ? "" : "mainset__norepetitions"
            }`}
          >
            {repetitions} x
          </h2>
          {intervals.map((interval, index) => (
            <li className="mainSet__list" key={interval.id}>
              <p className="mainset__text">{interval.duration} minutes</p>
              <p className="mainset__text">{interval.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WorkoutDisplayList;
