import "./HomePage.scss";
import Header from "../../components/Header/Header";

function HomePage() {
  return (
    <>
      <section className="heroImage__section">
        <div className="heroImage__textbox">
          <h1 className="heroImage__header">
            Your fitness journey should fit your life, not the other way around.
          </h1>
          <h3 className="heroImage__text">
            Forget rigid programs and extra equipment— we harness AI to create
            customizable workouts that help you stay focused and consistent,
            whether you aim to race or work out once a week. Track your
            progress, build confidence, and discover the joy of movement with
            workouts designed just for you.
          </h3>
          <p className="heroImage__text-join">
            Start today, and see what you can achieve.
          </p>
        </div>
      </section>
      <section className="background__section">
        <h1 className="background__header">Let AI do the thinking ... </h1>
        <p className="background__text">
          You don't have time to commit to a full training plan but you want to
          stay fit. At ActiveAI we help you build structured workout plans that
          make the most of the precious time you have to workout.{" "}
        </p>
        <p className="background__text">
          We specialize in cycling, running and swimming workouts. We can cater
          to seasoned athletes or to those just wanting to try out a new sport
          but don't know where to start.
        </p>
      </section>
      <section className="features__section">
        <h1 className="features__header">FEATURES</h1>
        <div className="features__container">
          <article className="features__details">
            <h2 className="features__text">Select your sport</h2>
          </article>
          <article className="features__details">
            <h2 className="features__text">
              Let us know if there is anything specific we shoudl consider in
              your workout. Injury? Specific Equipment?{" "}
            </h2>
          </article>
          <article className="features__details">
            <h2 className="features__text">
              Save your workouts to your profile to complete at a later time
              (future)
            </h2>
          </article>
        </div>
      </section>
    </>
  );
}

export default HomePage;
