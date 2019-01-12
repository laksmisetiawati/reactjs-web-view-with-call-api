import React, { Component } from 'react';
import axios from 'axios';
// import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

import Navigation from './../components/navigation';

// ASSETS
import './../assets/css/main.css';

class UsersDetailPage extends Component {
  state = {
    user_id: null,
    user_data: []
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
      })
  }

  // onMapCreated(map) {
  //   map.setOptions({
  //     disableDefaultUI: true
  //   });
  // }

  // onDragEnd(e) {
  //   console.log('onDragEnd', e);
  // }

  // onCloseClick() {
  //   console.log('onCloseClick');
  // }

  // onClick(e) {
  //   console.log('onClick', e);
  // }

  render() {
    const datas = this.state.user_data;
    // const params = {v: '3.exp', key: 'AIzaSyDlWR1cGnWHlBk1v7rm_yIekbZ01PD4-X4'};
    
    return (
      <div className="container">

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

                        <h6 className="company-title">Company</h6>
                        <p className="no-margin">{user.company.name}</p>
                        <p className="no-margin">{user.company.catchPhrase}</p>
                        <p className="no-margin">{user.company.bs}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="address col-md-6">
                      <div>
                        <p>{user.address.street}</p>
                        <p>{user.address.suite}</p>
                        <p>{user.address.city}</p>
                        <p>{user.address.zipcode}</p>
                      </div>

                      <iframe src={"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15865.66387446982!2d" + user.address.geo.lng + "!3d" + user.address.geo.lat + "!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1547253889458"} width="80%" height="200" frameBorder="0" allowFullScreen title={user.address.street + "<br />" + user.address.suite + "<br />" + user.address.city + "<br />" + user.address.zipcode}></iframe>

                      {/* <Gmaps
                        width={'80%'}
                        height={'200px'}
                        lat={user.address.geo.lat}
                        lng={user.address.geo.lng}
                        zoom={12}
                        loadingMessage={'Please wait...'}
                        params={params}
                        onMapCreated={this.onMapCreated}>
                        <Marker
                          lat={user.address.geo.lat}
                          lng={user.address.geo.lng}
                          draggable={true}
                          onDragEnd={this.onDragEnd} />
                        <InfoWindow
                          lat={user.address.geo.lat}
                          lng={user.address.geo.lng}
                          content={user.address.street + "<br />" + user.address.suite + "<br />" + user.address.city + "<br />" + user.address.zipcode}
                          onCloseClick={this.onCloseClick} />
                        <Circle
                          lat={user.address.geo.lat}
                          lng={user.address.geo.lng}
                          radius={500}
                          onClick={this.onClick} />
                      </Gmaps> */}

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