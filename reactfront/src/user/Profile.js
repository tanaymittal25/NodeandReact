import React, { Component } from 'react';
import { isAuthenticated } from '../auth';

class Profile extends Component {

  constructor() {
    super();
    this.state = {
      user: "",
      redirectUser: false
    };
  }

  // componentDidMount() {
  //   const userId = this.props.
  // }

  render() {
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">
          Profile
        </h2>
        <p>Hello {isAuthenticated().user.name}</p>
        <p>{isAuthenticated().user.email}</p>
      </div>
    );
  }
}

export default Profile;
