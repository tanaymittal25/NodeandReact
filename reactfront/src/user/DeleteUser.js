import React, { Component } from 'react';

class DeleteUser extends Component {

    deleteAccount = () => {
        
    }

    deleteConfirm = () => {
        let answer = window.confirm("Delete Profile ?");
        if (answer) {
            this.deleteAccount();
        }
    }

    render() {
        return (

            <button onClick={this.deleteConfirm} className="btn btn-raised btn-danger">
                Delete Profile
            </button>

        );
    }
}

export default DeleteUser;