import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false}
  }
  renderMenu(){
    return(
      <div className="main-menu-container">
        <nav className="main-menu">
          <Link to="/">
            <i className="material-icons">home</i>
            <span>Home</span>
          </Link>
          <Link to="/contact">
            <i className="material-icons">mail</i>
            <span>Contact</span>
          </Link>
        </nav>
      </div>
    )
  }
  render() {
    const open = this.state.open;

    return (
      <div>
        <div className="menu-title" onClick={() => this.setState({open: !open})}>
          <i className="material-icons">
            {open ? 'close' : 'menu'}
          </i>
          <i>Menu</i>
        </div>

        {open ? this.renderMenu() : ''}
    </div>
    );
  }
}

export default Menu;
