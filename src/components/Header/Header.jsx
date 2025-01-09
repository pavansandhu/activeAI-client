import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <h1 className="header__logo">active AI</h1>
      <button className="header__button">
        <p className="header__button-text">JOIN FOR FREE</p>
      </button>
      <button className="header__button">
        <p className="header__button-text">LOGIN</p>
      </button>
    </div>
  );
}

export default Header;
