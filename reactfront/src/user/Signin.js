import React, { Component } from 'react';

class Signin extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    };

    handleChange = (name) => (event) => {
        this.setState({ [name]: event.target.value })
    };

    clickLogin = event => {
        event.preventDefault();
        const { email, password } = this.state;
        const user = {
            email,
            password
        };

        this.signinForm(user)
            .then(data => {
                if (data.error) {
                    this.setState({ error: data.error });
                } else {

                }
            });
    }

    signinForm = (email, password) => (
        <form>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    type="email"
                    className="form-control"
                    onChange={this.handleChange("email")}
                    value={email}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    type="password"
                    className="form-control"
                    onChange={this.handleChange("password")}
                    value={password}
                />
            </div>
            <button onClick={this.clickLogin} className="btn btn-raised btn-primary">LOGIN</button>
        </form>
    )

    render() {
        const { email, password, error } = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Signin</h2>
                <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                    {error}
                </div>
                {this.signinForm(email, password)}
            </div>
        );
    }
}

export default Signin;