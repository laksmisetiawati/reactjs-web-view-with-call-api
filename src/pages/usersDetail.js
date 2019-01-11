import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Bootstrap from './../components/bootstrap';
import Navigation from './../components/navigation';

// ASSETS
import './../assets/css/main.css';

class UsersDetailPage extends Component {
  state = {
    user_id: null,
    user_data: [],
    user_address: []
  }

  componentDidMount() {
    let user_id = this.props.match.params.user_id;
    this.setState({
      user_id: user_id
    });
    axios.get("http://jsonplaceholder.typicode.com/users/" + user_id)
      .then(res => {
        const user_data = [
          res.data
        ];
        this.setState({ user_data });

        if(typeof user_data.address !== "undefined") {
          const user_address = user_data.address;
          this.setState({ user_address });
        }

      })
  }

  render() {
    const datas = this.state.user_data;
    console.log(datas);
    
    return (
      <div className="container">
        <Bootstrap />

        <div className="row">
          <Navigation />

          {datas.map(user => (

            <div className="wrapUserList col-lg-10" key={user.id}>
              <h3 className="title">{user.name}</h3>

              <div className="userList" key={user.id}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-3">
                        <img src={ require('./../assets/images/profile.jpg') } 
                          className="imgResponsive"
                          alt={"profile " + user.name} />
                      </div>

                      <div className="col-9">
                        <p className="username">
                          {user.username}
                        </p>
                        <p className="email">
                          <a href={"mailto:" + user.email}>
                            {user.email}
                          </a>
                        </p>
                        <p className="phone">{user.phone}</p>
                        <p className="website">{user.website}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="address col-md-6">
                      <p>{user.address.street}</p>
                      <p>{user.address.suite}</p>
                      <p>{user.address.city}</p>
                      <p>{user.address.zipcode}</p>
                  </div>
                </div>
              </div>

            </div>

          ))}

        </div>
      </div>
    );
  }
}

export default UsersDetailPage;
