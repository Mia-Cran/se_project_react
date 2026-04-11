import "./Header.css";
import headerLogo from "../../assets/logo.png";

function Header({ onAddClick }) {
  const currentDate = new Date().toLocaleString('default', { 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="WTWR Logo" />
      </header>
  );
}
export default Header;