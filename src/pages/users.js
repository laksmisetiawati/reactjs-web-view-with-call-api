import React, { Component } from 'react';
import axios from 'axios';

import Bootstrap from './../components/bootstrap';
import Navigation from './../components/navigation';

// ASSETS
import './../assets/css/main.css';

class UsersPage extends Component {
  state = {
    users: []
  }
  
  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/users")
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    
    const users = this.state.users;

    console.log(users);
    
    return (
      <div className="container">
         <Bootstrap />
        <div className="row">
          <div className="col-md-3">
            <Navigation />
          </div>
          <div className="userList col-md-9">
            <div className="App">
              <ul>
                {users.map(user => (
                  <li key={user.name}>
                    {user.name} {user.price}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersPage;
