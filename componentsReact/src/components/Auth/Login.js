import React, { Component } from "react";
import Alert from "./../Alert";
import UrlUtils from "../../utils/UrlUtil";
import HttpClientUtil from "../../utils/HttpClientUtil";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: null
        };
        this._urlUtils = new UrlUtils(window.location.search);
        this.handlerChangeInput.bind(this);
        this.submit.bind(this);
    }

    handlerChangeInput(key, value) {
        this.setState({ [key]: value });
    }

    submit(event) {
        event.preventDefautl();
        const formData = new FormData();
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);

        HttpClientUtil
            .post(this.props.urlAutentication, formData)
            .then(() => {
                window.location = this.props.authenticationSuccessRedirectTo;
            }).catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        const error = this._urlUtils.getQuerystring('error');
        if (error) {
            this.setState({ error });
        }
    }

    render() {
        return (
            <form className="col-md-5 offset-md-3 form-signin" method="POST" onSubmit={this.submit}
                action={this.props.urlAutentication}>
                { this.state.error && <Alert message={this.state.error} /> }
                <h1 className="h3 mb-3 font-weight-normal text-center">{this.props.title}</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" name="email"
                    value={this.state.email}
                    onChange={event => this.handlerChangeInput("email", event.target.value)}
                    className="form-control" placeholder="Email address" required
                    autoFocus />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword"
                    value={this.state.password}
                    onChange={event => this.handlerChangeInput("password", event.target.value)}
                    name="password" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    {this.props.buttonTitle}
                </button>
            </form>
        );
    }
}