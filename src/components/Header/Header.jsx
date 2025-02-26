import "./Header.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/svg/login.svg";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isSelectWorkout = location.pathname === "/select-workout";
  const isStartWorkout = location.pathname === "/start-workout";
  const isUserProfile = location.pathname === "/user-profile";

  const reloadPage = () => {
    if (isSelectWorkout) {
      window.location.reload();
    }
  };

  return (
    <div className="header">
      <div className="header__fixed">
        <NavLink to="/" className="header__logo-link">
          <h1 className={`header__logo ${isHome ? "header__logo-home" : ""}`}>
            activeAI
            <p className={`powered ${isHome ? "powered-home" : ""}`}>
              Powered by Gemini AI
            </p>
          </h1>
        </NavLink>
        <NavLink to="/select-workout" className="header__workout-link">
          <div className="button__workout-container">
            <button onClick={reloadPage} className="button__header">
              <p className="button__text">Workout Quick Start</p>
            </button>
          </div>
        </NavLink>
      </div>
      <NavLink
        to="/user-profile"
        className={`header__userProfile ${isUserProfile ? "" : "header__hide"}`}
      >
        <div className="button__workoutLib-container">
          <button className="button__header">
            <p className="button__text">Workout Library</p>
          </button>
        </div>
      </NavLink>
      <NavLink
        to="/user-profile"
        className={`header__profile ${isHome ? "" : "header__hide"}`}
      >
        <div className="button__profile-container">
          <button className="button__header">
            <p className="button__text-join">Join for Free</p>
            <p className="button__text-mobile">Join</p>
          </button>

          <button className="button__header">
            <p className="button__text-login">Login </p>
            <img src={login} alt="login" className="button__text-mobile" />
          </button>
        </div>
      </NavLink>
      <NavLink
        to="/user-profile"
        className={`header__profile ${isHome ? "header__hide" : ""}`}
      >
        <button className="button__header">
          <p className="button__text-profile">Profile</p>
        </button>
      </NavLink>
    </div>
  );
}

export default Header;
