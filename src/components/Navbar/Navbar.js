import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const NavbarComponent = () => {
  const token = localStorage.getItem('token');
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>School</NavbarBrand>
        <Nav className="ml-auto" navbar>
          {
            token
            && (
                <>
                  <NavItem>
                    <Link to="/profile/2">Profile</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/exam">Exam Result</Link>
                  </NavItem>
                </>
            )
        }
        </Nav>
      </Navbar>
    </div>
  );
};

export default withRouter(NavbarComponent);
