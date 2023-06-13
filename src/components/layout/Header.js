import  { ReactComponent as Icon } from "../../assets/nodepop.svg";
import { logout } from "../Auth/service";


const Header = ({ isLogged, onLogout }) => {
    const handleLogoutClick = async () => {
        await logout();
        onLogout();
      };
    

  return (
    <header>
      <div>
        <Icon width="32" height="32" />
      </div>
      <nav>{isLogged ? <button onClick={handleLogoutClick}>Logout</button> : <button>Login</button>}</nav>
    </header>
  );
};

export default Header;
