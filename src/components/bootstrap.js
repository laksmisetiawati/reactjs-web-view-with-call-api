import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Bootstrap extends Component {
  render() {
    return (
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
    );
  }
}

export default withRouter(Bootstrap);