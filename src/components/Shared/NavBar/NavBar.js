import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link, useHistory } from 'react-router-dom';

import logo from '../../../Assets/logo.png';
import useAuth from '../../../hooks/useAuth';

import './NavBar.css';
const NavBar = () => {
  const { user, adminRole, logOut } = useAuth();
  const history = useHistory();
  const handleLogin = () => {
    history.push('/auth');
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <Navbar expand='lg' variant='light' className='navbar'>
      <Container className='py-2'>
        <Navbar.Brand as={Link} to='/'>
          <img src={logo} alt='website logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='ms-auto'>
            <Nav.Link as={NavLink} activeClassName='active' to='/' exact>
              Home
            </Nav.Link>

            {/* login and logout button */}
            {user?.email ? (
              <>
                <Nav.Link
                  as={NavLink}
                  activeClassName='active'
                  to='/dashboard'
                  exact
                >
                  Dashboard
                </Nav.Link>
                {adminRole ? 'gg' : 'user'}
                <Button
                  variant='outline-dark'
                  className='ms-2'
                  size='sm'
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                variant='outline-dark'
                className='ms-2'
                size='sm'
                onClick={handleLogin}
              >
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
