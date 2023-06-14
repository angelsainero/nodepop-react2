import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Icon } from "../../assets/nodepop.svg";
import { logout } from "../Auth/service";
import "./Header.css";
import Button from "../shared/button";

const Header = ({ isLogged, onLogout }) => {
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <header className="paper">
      <Link to="/">
        <div>
          <Icon width="60" height="60" />
        </div>
      </Link>
      <NavLink to="/adverts/new">Nuevo Anuncio</NavLink> |{" "}
      <NavLink to="/adverts" end>
        Listado de Anuncios
      </NavLink>
      <nav>
        {isLogged ? (
          <Button onClick={handleLogoutClick}>Logout</Button>
        ) : (
          <Link to="/login/"> 
           <Button variant="relleno">Login</Button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
