import React, { Component } from 'react';

import Bootstrap from './../components/bootstrap';
import Navigation from './../components/navigation';

// ASSETS
import './../assets/css/main.css';

class SettingsPage extends Component {
  render() {
    return (
      <div className="container">
        <Bootstrap />

        <div className="row">
          <Navigation />

          <div className="wrapUserList col-lg-10">
            <h3 className="title">Settings</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default SettingsPage;