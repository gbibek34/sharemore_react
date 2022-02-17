import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";
// import { SidebarData } from "./SidebarData";

const Header = () => {
  var { user, dispatch } = useContext(Context);

  const [author, setAuthor] = useState([]);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    const fetchAuthor = async () => {
      const config = {
        headers: {
          Authorization: "Bearer " + user,
        },
      };
      const res = await axios.get("/user/get", config);
      setAuthor(res.data["msg"]);
    };
    fetchAuthor();
  }, [user]);

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
              <Nav.Link as={Link} to="/" className="nav-link navlink p-3">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={`/posts/?user=${author.username}`}
                className="nav-link navlink p-3"
              >
                My Posts
              </Nav.Link>
              <Nav.Link as={Link} to="/more" className="nav-link navlink p-3">
                More
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/post/create"
                className="nav-link navlink p-3"
              >
                Write
              </Nav.Link>
              {user ? (
                <NavDropdown title="Profile" className="nav-link pl-3">
                  <NavDropdown.Item
                    as={Link}
                    to="/profile"
                    className="drop-link"
                  >
                    {author.username}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/"
                    className="drop-link"
                    onClick={handleLogout}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/login" className="btn btn-decor btn-login m-2 px-4">
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
