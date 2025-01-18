import "./Header.scss";
import { useLocation } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1 className="header__logo">active AI</h1>
      <div className="button__home-container">
        <button className="button__header">
          <p className="button__text">Join for Free</p>
        </button>
        <button className="button__header">
          <p className="button__text">Login</p>
        </button>
      </div>
      <div className="button__loggedin-container">
        <button className="button__header">
          <p className="button__text">New Workout</p>
        </button>
        <button className="button__header">
          <p className="button__text">Workout Library</p>
        </button>
      </div>
      <div className="button__profile-container">
        <button className="button__header">
          <p className="button__text">Profile</p>
        </button>
      </div>
    </div>
  );
}

export default Header;

{
  /* <div className="header">
      <h1 className="header__logo">active AI</h1>
      <div className="button__home-container">
        <button className="button__join-button">
          <p className="button__join-text">JOIN FOR FREE</p>
        </button>
        <button className="button__login-button">
          <p className="button__login-text">LOGIN</p>
        </button>
      </div>
      <div className="button__loggedin-container">
        <button className="header__newworkout-button">
          <p className="header__newworkout-text">New Workout</p>
        </button>
        <button className="header__workoutlib-button">
          <p className="header__workoutlib-text">Workout Library</p>
        </button>
      </div>
      <div className="button__profile-container">
        <button className="button__profile-button">
          <p className="button__profile-text">Profile</p>
        </button>
      </div>
    </div> */
}
