import React from 'react'
import {Navbar} from 'react-bootstrap'
import logo from '../Styles/Images/budget.png';
import '../Styles/css/Amount.css'
function Header() {
    return (
        <Navbar className="custom" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Expense Tracker
            </Navbar.Brand>
      </Navbar>
    );
  }
  
  export default Header;