import logo, { ReactComponent as Icon } from "../../assets/nodepop.svg";

const Header = () => {
  return (
    <header>
      <div>
        <Icon width="32" height="32" />
      </div>
      <nav>
        <button>Login</button>
      </nav>
    </header>
  );
};

export default Header;
