import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// ASSETS
import './../assets/css/main.css';

class Header extends Component {
  render() {
    return (
      <header className="container">
         <div className="row">
            <div className="col-6"><h2>My Admin</h2></div>
            <div className="col-6">
               <div className="clearfix">
                  <a href="/" className="fRight">logout</a>
                  <p className="fRight">Welcome <NavLink to="/">Admin</NavLink>,&nbsp;</p>
               </div>
            </div>
         </div>
      </header>
    );
  }
}

export default Header;