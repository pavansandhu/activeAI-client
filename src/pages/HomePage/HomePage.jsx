import "./HomePage.scss";
import Header from "../../components/Header/Header";
import { NavLink } from "react-router-dom";
import bike from "../../assets/svg/bike.svg";
import run from "../../assets/svg/run.svg";
import swim from "../../assets/svg/swim.svg";

function HomePage() {
  return (
    <>
      <section className="homepage__section">
        <section className="heroImage__section">
          <div className="heroImage__textbox">
            <h1 className="heroImage__header">
              Your fitness journey should fit your life, not the other way
              around.
            </h1>
            <p className="heroImage__text">
              Forget rigid programs and extra equipment— we harness AI to create
              customizable workouts that help you stay focused and consistent,
              whether you aim to race or work out once a week. Track your
              progress, build confidence, and discover the joy of movement with
              workouts designed just for you.
            </p>
            <p className="heroImage__text-join">
              <NavLink className="heroImage__quickstart" to="/select-workout">
                Start today{" "}
              </NavLink>
              , and see what you can achieve.
            </p>
          </div>
        </section>
        <section className="features__section">
          <h1 className="features__header">FEATURES</h1>
          <div className="features__container">
            <article className="features__details">
              <h2 className="features__text">
                activeAI specializes in cycling, run and swim workouts
              </h2>
            </article>
            <article className="features__details">
              <h2 className="features__text">
                Cater your workout to your unique needs.
              </h2>
            </article>
            <article className="features__details">
              <h2 className="features__text">Track & Analyze progess</h2>
            </article>
          </div>
        </section>
        <section className="background__section">
          <div className="background__section-text">
            <h1 className="background__text">Let AI do the thinking ... </h1>
            <p className="background__text">
              You don't have time to commit to a full training plan but you want
              to stay fit. At ActiveAI we help you build structured workout
              plans that make the most of the precious time you have to workout.{" "}
            </p>
            <p className="background__text">
              We specialize in cycling, running and swimming workouts. We can
              cater to seasoned athletes or to those just wanting to try out a
              new sport but don't know where to start.
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default HomePage;
