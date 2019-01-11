import React from 'react';

import Bootstrap from './../components/bootstrap';
import Navigation from './../components/navigation';

// ASSETS
import './../assets/css/main.css';

const Error404Page = () => (
  <div className="container">
    <Bootstrap />
    <div className="row">
      <Navigation />

      <div className="userList col-lg-10">
        <div className="App">
          <p>I'm sorry I can't find your page :(</p>
        </div>
      </div>
    </div>
  </div>
)

export default Error404Page;