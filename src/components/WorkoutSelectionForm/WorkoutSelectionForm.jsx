import "./WorkoutSelectionForm.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function WorkoutSelectionForm(props) {
  const [formData, setFormData] = useState({
    exerciseType: "",
    exerciseDuration: "",
    fitnessLevel: "",
    workoutIntensity: "",
    additionalInfo: "",
  });
  const [workoutData, setWorkoutData] = useState(null);

  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    try {
      const response = await axios.post(
        `http://localhost:8080/workout/request`,
        formData
      );
      console.log("Workout data sent successfully:", response);
      setWorkoutData(response.data);
    } catch (error) {
      console.log(error);
      alert("Error sending workout request");
    }
  };

  // console.log(workoutData);

  return (
    <>
      <div className="wo__container">
        <h1 className="wo__header"></h1>
        <form className="wo-form" onSubmit={handleSubmit}>
          <label className="wo-form__label">
            <h3 className="wo-form__exercise-type">Exercise Type:</h3>
            <select
              value={formData.exerciseType}
              name="exerciseType"
              onChange={handleFormDataChange}
            >
              <option value="select">select an exercise type</option>
              <option value="indoorCycle">indoor cycle</option>
              <option value="outdoorCycle">outdoor cycle</option>
              <option value="treadmillRun">treadmill run</option>
              <option value="outdoorRun">outdoor run</option>
            </select>
          </label>
          <label className="wo-form__label">
            <h3 className="wo-form__duration">Exercise Duration:</h3>
            <input
              type="text"
              name="exerciseDuration"
              onChange={handleFormDataChange}
              value={formData.exerciseDuration}
              className="wo-form__formfield"
            />
          </label>
          <label className="wo-form__label">
            <h3 className="wo-form__fitness-level">Fitness Level:</h3>
            <select
              value={formData.fitnessLevel}
              name="fitnessLevel"
              onChange={handleFormDataChange}
            >
              <option value="select">select a fitness level</option>
              <option value="beginner">
                Beginner, I've been working out less than once a week for the
                last month
              </option>
              <option value="intermediate">
                Intermediate, I workout out minimum twice a week for the last
                month
              </option>
              <option value="advanced">
                Advance, I workout consistently and workout minimum 3 times a
                week for the last month
              </option>
            </select>
          </label>
          <label className="wo-form__label">
            <h3 className="wo-form__intensity">Workout Intensity:</h3>
            <select
              value={formData.workoutIntensity}
              name="workoutIntensity"
              onChange={handleFormDataChange}
            >
              <option value="select">select a intensity level</option>
              <option value="lowIntensity">
                Low Intensity: you can talk to someone next to you
              </option>
              <option value="mediumIntensity">
                Medium Intensity: you can talk but it shouldn't feel easy
              </option>
              <option value="highIntensity">
                High Intensity: you should not be able to talk
              </option>
            </select>
          </label>

          <label className="wo-form__label">
            <h3 className="wo-form__info">
              Additional Info:{" "}
              <span>
                <h4 className="wo-form__additionalinfo">
                  Anything Specific you want to add to your workout? Focus,
                  injuries, specific equipment?
                </h4>
              </span>
            </h3>
            <input
              type="text"
              name="additionalInfo"
              onChange={handleFormDataChange}
              value={formData.additionalInfo}
              className="wo-form__formfield"
            />
          </label>
          <section className="wo-form__cta">
            <button className="wo-form__generate" type="submit">
              <h3 className="wo-form__info">Generate</h3>
            </button>
          </section>
        </form>
      </div>
    </>
  );
}

export default WorkoutSelectionForm;
