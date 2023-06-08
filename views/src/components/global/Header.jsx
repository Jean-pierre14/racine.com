import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="NavbarHeader">
        <div>
          <div className="brand">
            Racine14<span className="Color">Creator</span>
          </div>
        </div>
        <div className="Links">
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
