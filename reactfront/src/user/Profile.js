import React, { Component } from 'react';
import { isAuthenticated } from '../auth';
import { Redirect, Link } from 'react-router-dom';
import { read } from './apiUser';
import profilePhoto from '../images/profilePhoto.png';
import DeleteUser from './DeleteUser';

class Profile extends Component {

  constructor() {
    super();
    this.state = {
      user: "",
      redirectUser: false
    };
  }

  init = (userId) => {
    const token = isAuthenticated().token;
    read(userId, token)
      .then(data => {
        if (data.error) {
          this.setState({ redirectUser: true });
        } else {
          this.setState({ user: data });
        }
      });
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.init(userId);
  }

  componentWillReceiveProps(props) {
    const userId = props.match.params.userId;
    this.init(userId);
  }

  render() {
    const { redirectUser, user } = this.state;
    if (redirectUser) return <Redirect to="/signin" />
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">
          Profile
            </h2>
        <div className="row">
          <div className="col-md-6">
            <img
              className="card-img-top"
              src={profilePhoto}
              alt={user.name}
              style={{
                width: '18vw',
                height: '15vw',
                objectFit: 'fill'
              }}
            />

          </div>
          <div className="col-md-6">
            <div className="lead mt-5 ml-5">
              <p>Hello {user.name}</p>
              <p>{user.email}</p>
              <p>{`Joined ${new Date(
                user.created
              ).toDateString()}`}</p>
            </div>
            {isAuthenticated().user && user._id == isAuthenticated().user._id && (
              <div className="d-inline-block mt-5">
                <Link
                  className="btn btn-raised btn-success mr-5"
                  to={`/user/edit/${user._id}`}
                >
                  Edit Profile
                </Link>
                <DeleteUser />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
