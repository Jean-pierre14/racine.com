import "./Header.css";
const Header = () => {
  return (
    <div className="container header">
      <nav className="nav">
        <div className="logo">Logo</div>
        <div className="navLinks">
          <ul>
            <li>Home</li>
            <li>Profil</li>
            <li>About Me</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
