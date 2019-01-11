import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// ASSETS
import './../assets/css/main.css';

class Header extends Component {
  render() {
    return (
      <div className="container">
         <div className="row">
            <div className="col-sm-6"><h2>My Admin</h2></div>
            <div className="col-sm-6">
               <div className="clearfix">
                  <a href="/" className="fRight">logout</a>
                  <p className="fRight">Welcome <NavLink to="/">Admin</NavLink>,&nbsp;</p>
               </div>
            </div>
         </div>
      </div>
    );
  }
}

export default Header;