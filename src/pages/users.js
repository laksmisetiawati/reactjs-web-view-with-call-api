import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
    
    return (
      <div className="container">
        <Bootstrap />
        <div className="row">
          <Navigation />

          <div className="wrapUserList col-lg-10">
            <h3 className="title">All Users</h3>

            {users.map(user => (
              <div className="userList" key={user.id}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-3">
                        <img alt={"profile" + user.name} 
                          src={ require('./../assets/images/profile.jpg') } 
                          className="imgResponsive" />
                      </div>

                      <div className="col-9">
                        <p className="name">{user.name}</p>
                        <p className="username">
                          <NavLink to={"/users/detail/" + user.id}>
                            {user.username}
                          </NavLink>
                        </p>
                        <p className="email">
                          <a href={"mailto:" + user.email}>
                            {user.email}
                          </a>
                        </p>
                        <p className="phone">{user.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="address col-lg-6 d-md-none d-lg-block">
                    <p>{user.address.street}</p>
                    <p>{user.address.suite}</p>
                    <p>{user.address.city}</p>
                    <p>{user.address.zipcode}</p>
                  </div>
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
