import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavLinks = [
  { id: 1, path: "/", element: "Home" },
  { id: 2, path: "/contact", element: "Contact Us" },
  { id: 3, path: "/login", element: "Login" },
  { id: 4, path: "/register", element: "Register" },
];

function Header() {
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Racine14Creator
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {NavLinks.map((item) => (
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  key={item.id}
                  to={item.path}
                >
                  {item.element}
                </Link>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
