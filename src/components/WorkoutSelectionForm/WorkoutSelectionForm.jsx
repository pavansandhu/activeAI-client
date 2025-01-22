import "./WorkoutSelectionForm.scss";
import ExerciseTypeCards from "../ExerciseTypeCards/ExerciseTypeCards";
import WorkoutDisplayPortal from "../../components/WorkoutDisplayPortal/WorkoutDisplayPortal";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import arrow_forward from "../../assets/svg/arrow_forward.svg";

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
  const [formErrors, setFormErrors] = useState({});

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

  const isFormValid = () => {
    if (
      !formData.exerciseDuration.trim() ||
      !formData.fitnessLevel.trim() ||
      !formData.workoutIntensity.trim()
    ) {
      return false;
    }
    return true;
  };

  const handleNextStep = () => {
    if (isFormValid()) {
      setCurrentStep((prevStep) => prevStep + 1);
      if (currentStep === 4) {
        return;
      }
    } else {
      alert("Please complete all form fields");
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      try {
        const response = await axios.post(
          `http://localhost:8080/workout/request`,
          formData
        );
        console.log("Workout data sent successfully:", response);
        setWorkoutData(response.data);
        // setIsModalOpen(true);
        setCurrentStep(5);
      } catch (error) {
        console.log(error);
        alert("Error sending workout request");
      }
    } else {
      alert("Failed to complete sections of the workout form");
    }
  };

  return (
    <>
      <div className="workoutselection__container">
        <div className="wo__container">
          <form className="wo-form" onSubmit={handleSubmit}>
            {currentStep === 1 &&
              createPortal(
                <label className="wo-form__exercise-type-label">
                  <h3 className="wo-form__exercise-type">
                    Select the type of workout you would like to do:
                  </h3>

                  <ExerciseTypeCards
                    handleCardClick={handleCardClick}
                    selectedOption={formData.exerciseType}
                  />
                </label>,
                document.body
              )}
            {currentStep === 2 &&
              createPortal(
                <div className="wo-form__portal">
                  <div className="wo-form__container">
                    <label className="wo-form__label">
                      <h3 className="wo-form__text">
                        Exercise Duration (please provide in minutes only):
                      </h3>
                      <input
                        type="number"
                        name="exerciseDuration"
                        onChange={handleFormDataChange}
                        value={formData.exerciseDuration}
                        className="wo-form__formfield "
                        placeholder="minutes"
                      />
                    </label>
                  </div>

                  <div className="wo-form__container">
                    <label className="wo-form__label">
                      <h3 className="wo-form__text">Fitness Level:</h3>
                      <select
                        className="wo-form__select"
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
                          Intermediate, I workout out minimum twice a week for
                          the last month
                        </option>
                        <option value="advanced">
                          Advance, I workout consistently and workout minimum 3
                          times a week for the last month
                        </option>
                      </select>
                    </label>
                  </div>

                  <div className="wo-form__container">
                    <label className="wo-form__label">
                      <h3 className="wo-form__text">Workout Intensity:</h3>
                      <select
                        className="wo-form__select"
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
                  </div>
                  <button
                    onClick={handleNextStep}
                    type="button"
                    className="wo-form__next"
                  >
                    Next
                    <img
                      src={arrow_forward}
                      alt=""
                      className="wo-form__next-icon"
                    />
                  </button>
                </div>,
                document.body
              )}
            {currentStep === 3 &&
              createPortal(
                <div className="wo-form__info-container">
                  <label className="wo-form__label-info">
                    <h3 className="wo-form__info-text">
                      Anything Specific we should know about you or what you'd
                      like from your workout?
                    </h3>
                    <h4 className="wo-form__info-text">
                      Some examples can include:{" "}
                      <li>injuries or health conditions</li>
                      <li>
                        specific equipment like a power meter sensor or are
                        using a spin bike that reads rpm
                      </li>
                      <li>
                        You can also ask for specific items such as you "I want
                        to do a strength builder bike ride"
                      </li>
                    </h4>

                    <input
                      type="text"
                      name="additionalInfo"
                      onChange={handleFormDataChange}
                      value={formData.additionalInfo}
                      className="wo-form__formfield-info"
                    />
                  </label>
                  <button
                    onClick={handleNextStep}
                    type="button"
                    className="wo-form__next"
                  >
                    Next
                    <img
                      src={arrow_forward}
                      alt=""
                      className="wo-form__next-icon"
                    />
                  </button>
                </div>,
                document.body
              )}
            {currentStep === 4 && (
              <section className="wo-form__cta">
                <article className="wo-form__workoutDataPreview">
                  <h1 className="wo-form__previewText">
                    Summary of your workout selections:{" "}
                  </h1>
                  <ul className="wo-form__preview">
                    <li className="wo-form__previewList">
                      <h3 className="wo-form__field">Exercise Type</h3>
                      <p className="wo-form__field">{formData.exerciseType}</p>
                    </li>
                    <li className="wo-form__previewList">
                      <h3 className="wo-form__field">Exercise Duration</h3>
                      <p className="wo-form__field">
                        {formData.exerciseDuration} minutes
                      </p>
                    </li>
                    <li className="wo-form__previewList">
                      <h3 className="wo-form__field">Fitness Level</h3>
                      <p className="wo-form__field">{formData.fitnessLevel}</p>
                    </li>
                    <li className="wo-form__previewList">
                      {" "}
                      <h3 className="wo-form__field">Workout Intensity</h3>
                      <p className="wo-form__field">
                        {formData.workoutIntensity}
                      </p>
                    </li>
                    <li className="wo-form__previewList">
                      {" "}
                      <h3 className="wo-form__field">Additional Info</h3>
                      <p className="wo-form__field">
                        {formData.additionalInfo}
                      </p>
                    </li>
                  </ul>
                </article>
                <button className="wo-form__generate-button" type="submit">
                  <h3 className="wo-form__generate">Generate Workout</h3>
                </button>
              </section>
            )}
          </form>
          {currentStep === 5 &&
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
      </div>
    </>
  );
}

export default WorkoutSelectionForm;
