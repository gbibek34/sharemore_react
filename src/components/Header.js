import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";

const Header = () => {
  const username = "Bibek Ghimire";
  var isLogged = true;
  // var admin = true;

  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Navbar expand="lg" sticky="top" className="navbar-container shadow-lg">
        <Container className="font-serifqs">
          <span className="sidebar-item-gap"></span>
          <Navbar.Brand as={Link} className="navbar-brand" to="/">
            Share<span>more</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/" className="nav-link navlink">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/myposts" className="nav-link navlink">
                My Posts
              </Nav.Link>
              <Nav.Link as={Link} to="/more" className="nav-link navlink">
                More
              </Nav.Link>
              {isLogged ? (
                <NavDropdown title="Profile" className="nav-link">
                  <NavDropdown.Item>
                    <Link to="/profile" className="drop-link">
                      {username}
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="/logout" className="drop-link">
                      Logout
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/signin" className="btn btn-decor btn-login m-2 px-4">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
