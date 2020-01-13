import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Signin extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            error: "",
            redirectUser: false,
            loading: false
        }
    };

    handleChange = (name) => (event) => {
        this.setState({ [name]: event.target.value })
    };

    authenticate = (jwt, next) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("jwt", JSON.stringify(jwt));
            next();
        }
    };

    clickLogin = event => {
        event.preventDefault();
        this.setState({ loading: true });
        const { email, password } = this.state;
        const user = {
            email,
            password
        }

        this.signin(user)
            .then(data => {
                console.log(data);
                if (data.error) {
                    this.setState({ 
                        error: data.error,
                        loading: false  
                    });
                } else {
                    //authenticate
                    this.authenticate(data, () => {
                        this.setState({ redirectUser: true });
                    });
                }
            });
    }

    signin = (user) => {
        return fetch("http://localhost:8180/signin", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .catch(err => console.log(err));
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
        const { email, password, error, redirectUser, loading } = this.state;

        if (redirectUser) {
            return <Redirect to='/' />
        }

        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Signin</h2>
                <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                    {error}
                </div>
                
                {
                    loading ? (
                        <div className="jumbotron text-center">
                            <h2>Loading...</h2>
                        </div>
                    ) : ("")
                }

                {this.signinForm(email, password)}
            </div>
        );
    }
}

export default Signin;