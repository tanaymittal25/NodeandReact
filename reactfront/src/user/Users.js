import React, { Component } from 'react';
import { list } from './apiUser';
import { Link } from 'react-router-dom';
import profilePhoto from '../images/profilePhoto.png';

class Users extends Component {

    constructor() {
        super();
        this.state = {
            users: []
        }
    };

    componentDidMount() {
        list()
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    this.setState({ users: data });
                }
            });
    }

    renderUser = (users) => (
        <div className="row">
            {
                users.map((user, i) => (
                    <div className="card col-md-4 mb-5">
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
                        <div className="card-body" key={i}>
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text">{user.email}</p>
                            <Link to={`/user/${user._id}`} className="btn btn-raised btn-sm btn-primary">View Profile</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );

    render() {
        const { users } = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">
                    Users
                </h2>
                {this.renderUser(users)}
            </div>
        );
    }
}

export default Users;