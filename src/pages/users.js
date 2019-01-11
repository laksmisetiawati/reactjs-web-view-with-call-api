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

          <div className="wrapUserList col-md-9">
            <h3>All Users</h3>

            {users.map(user => (
              <div className="userList row" key={user.id}>
                <div className="col-md-6">
                  <p>{user.name}</p>
                  <p>{user.username}</p>
                  <p><a>{user.email}</a></p>
                  <p>{user.phone}</p>
                </div>
                <div className="col-md-6">
                  <p>{user.address.street}</p>
                  <p>{user.address.suite}</p>
                  <p>{user.address.city}</p>
                  <p>{user.address.zipcode}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    );
  }
}

export default UsersPage;
