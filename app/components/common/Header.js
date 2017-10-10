import React from 'react';
import {IndexLink} from 'react-router';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/">Webpack npm Scripts Setup</IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <IndexLinkContainer to="/">
                <NavItem eventKey={1}>Home</NavItem>
              </IndexLinkContainer>

              <LinkContainer to="/other">
                <NavItem eventKey={2}>Other NAV</NavItem>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;