import "./Header.css";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/smaller-logo.png";

function Header({ onAddClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__right">
        <img src={logo} alt="WTWR app logo" className="smaller__logo" />
        <div className="main__left">
          <p className="main__date-location">{currentDate}, New York</p>
        </div>
      </div>
      <div className="header__right">
        <button className="header__add-clothes-btn" onClick={onAddClick}>
          + Add clothes
        </button>

        <div className="header__user-info">
          <p className="header__username">Terrence Tegegne</p>
          <img className="header__avatar" src={avatar} alt="User avatar" />
        </div>
      </div>
    </header>
  );
}
export default Header;
