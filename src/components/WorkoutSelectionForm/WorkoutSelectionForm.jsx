import "./WorkoutSelectionForm.scss";
import ExerciseTypeCards from "../ExerciseTypeCards/ExerciseTypeCards";
import WorkoutDisplayPortal from "../../components/WorkoutDisplayPortal/WorkoutDisplayPortal";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function WorkoutSelectionForm() {
  const [formData, setFormData] = useState({
    exerciseType: "",
    exerciseDuration: "",
    fitnessLevel: "",
    workoutIntensity: "",
    additionalInfo: "",
  });
  const [workoutData, setWorkoutData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCardClick = (exerciseType) => {
    setFormData({ ...formData, exerciseType });
    setCurrentStep(2);
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    if (currentStep === 6) {
      return;
    }
  };

  const navigate = useNavigate();

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
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
      alert("Error sending workout request");
    }
  };

  return (
    <>
      <div className="workoutselection__container">
        <div className="wo__container">
          <h1 className="wo__header"></h1>
          <form className="wo-form" onSubmit={handleSubmit}>
            {currentStep === 1 &&
              createPortal(
                <label className="wo-form__label">
                  <h3 className="wo-form__exercise-type">Exercise Type:</h3>

                  <ExerciseTypeCards
                    handleCardClick={handleCardClick}
                    selectedOption={formData.exerciseType}
                  />
                </label>,
                document.body
              )}
            {currentStep === 2 &&
              createPortal(
                <div className="wo-form__duration-container">
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
                  <button
                    onClick={handleNextStep}
                    type="button"
                    className="next"
                  >
                    Next
                  </button>
                </div>,
                document.body
              )}
            {currentStep === 3 &&
              createPortal(
                <div className="wo-form__fitnessLevel-container">
                  <label className="wo-form__label">
                    <h3 className="wo-form__fitness-level">Fitness Level:</h3>
                    <select
                      value={formData.fitnessLevel}
                      name="fitnessLevel"
                      onChange={handleFormDataChange}
                    >
                      <option value="select">select a fitness level</option>
                      <option value="beginner">
                        Beginner, I've been working out less than once a week
                        for the last month
                      </option>
                      <option value="intermediate">
                        Intermediate, I workout out minimum twice a week for the
                        last month
                      </option>
                      <option value="advanced">
                        Advance, I workout consistently and workout minimum 3
                        times a week for the last month
                      </option>
                    </select>
                  </label>
                  <button
                    onClick={handleNextStep}
                    type="button"
                    className="next"
                  >
                    Next
                  </button>
                </div>,
                document.body
              )}
            {currentStep === 4 &&
              createPortal(
                <div className="wo-form__intensity-container">
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
                        Medium Intensity: you can talk but it shouldn't feel
                        easy
                      </option>
                      <option value="highIntensity">
                        High Intensity: you should not be able to talk
                      </option>
                    </select>
                  </label>
                  <button
                    onClick={handleNextStep}
                    type="button"
                    className="next"
                  >
                    Next
                  </button>
                </div>,
                document.body
              )}
            {currentStep === 5 &&
              createPortal(
                <div className="wo-form__info-container">
                  <label className="wo-form__label">
                    <h3 className="wo-form__info">
                      Additional Info:{" "}
                      <span>
                        <h4 className="wo-form__additionalinfo">
                          Anything Specific you want to add to your workout?
                          Focus, injuries, specific equipment?
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
                  <button
                    onClick={handleNextStep}
                    type="button"
                    className="next"
                  >
                    Next
                  </button>
                </div>,
                document.body
              )}
            {currentStep === 6 && (
              <section className="wo-form__cta">
                <article className="wo-form__workoutDataPreview">
                  <ul className="wo-form__preview">
                    <li>
                      <h3>Exercise Type</h3>
                      {formData.exerciseType}
                    </li>
                    <li>
                      <h3>Exercise Duration</h3>
                      {formData.exerciseDuration}
                    </li>
                    <li>
                      <h3>Fitness Level</h3>
                      {formData.fitnessLevel}
                    </li>
                    <li>
                      {" "}
                      <h3>Workout Intensity</h3>
                      {formData.workoutIntensity}
                    </li>
                    <li>
                      {" "}
                      <h3>Additional Info</h3>
                      {formData.additionalInfo}
                    </li>
                  </ul>
                </article>
                <button className="wo-form__generate" type="submit">
                  <h3 className="wo-form__info">Generate Workout</h3>
                </button>
              </section>
            )}
          </form>
        </div>
        {isModalOpen &&
          createPortal(
            <section className="workoutdisplay__container">
              <WorkoutDisplayPortal
                onClose={() => {
                  console.log("Before close:", isModalOpen);
                  setIsModalOpen(false);
                  console.log("After close:", isModalOpen);
                }}
                workoutData={workoutData}
              />
            </section>,
            document.body
          )}
      </div>
    </>
  );
}

export default WorkoutSelectionForm;
