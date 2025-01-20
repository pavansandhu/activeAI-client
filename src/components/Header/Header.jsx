import "./Header.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import personIcon from "../../assets/svg/person_login.svg";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isSelectWorkout = location.pathname === "/select-workout";
  const isStartWorkout = location.pathname === "/start-workout";
  const isUserProfile = location.pathname === "/user-profile";

  return (
    <div className="header">
      <div className="header__fixed">
        <NavLink to="/" className="header__logo-link">
          <h1 className={`header__logo ${isHome ? "header__logo-home" : ""}`}>
            activeAI
          </h1>
        </NavLink>
        <NavLink to="/select-workout" className="header__workout-link">
          <div className="button__workout-container">
            <button className="button__header">
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
            <p className="button__text">Join for Free</p>
          </button>

          <button className="button__header">
            <p className="button__text">Login </p>
          </button>
        </div>
      </NavLink>
      <NavLink
        to="/user-profile"
        className={`header__profile ${isHome ? "header__hide" : ""}`}
      >
        <button className="button__header">
          <p className="button__text">Profile</p>
        </button>
      </NavLink>
    </div>
  );
}

export default Header;
