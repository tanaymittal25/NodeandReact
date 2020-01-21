import React, { Component } from 'react';
import { isAuthenticated } from '../auth';
import { Redirect } from 'react-router-dom';

class Profile extends Component {

  constructor() {
    super();
    this.state = {
      user: "",
      redirectUser: false
    };
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;
    fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${isAuthenticated().token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.error) {
          this.setState({ redirectUser: true });
        } else {
          this.setState({ user: data });
        }
      });
  }

  render() {
    const redirectUser = this.state.redirectUser;
    if (redirectUser) return <Redirect to="/singin" />
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">
          Profile
        </h2>
        <p>Hello {isAuthenticated().user.name}</p>
        <p>{isAuthenticated().user.email}</p>
        <p>{`Joined ${new Date(
          this.state.user.created
        ).toDateString()}`}</p>
      </div>
    );
  }
}

export default Profile;
