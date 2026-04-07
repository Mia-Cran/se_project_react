import "./Header.css";
import headerLogo from "../../../assets/logo.png";

function Header() {
  const currentDate = new Date().toLocaleString('default', { 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="WTWR Logo" />
      
      <div className="header__date-location">
        <p className="header__date">{currentDate}</p>
        <p className="header__location">New York</p>
      </div>
      
      <div className="header__user-controls">
        <button className="header__add-clothes-btn">
          + Add clothes
        </button>
        <div className="header__user-info">
          <p className="header__username">Terrence Tegegne</p>
          <img 
            className="header__avatar" 
            src="path-to-avatar" 
            alt="Terrence Tegegne"
          />
        </div>
      </div>
    </header>
  );
}
export default Header;