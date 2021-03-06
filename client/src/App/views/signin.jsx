import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import * as actions from '../actions';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../images/PictoTasker2.png';

class Signin extends Component {

    onSubmit = formProps => {
        this.props.signin(formProps, () => {
            this.props.history.push('/profile');
            this.props.history.push('/dashboard');

        });
    };

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="Login">

                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 myform">
                        <Form onSubmit={handleSubmit(this.onSubmit)}>
                            <div className="form-header">
                                <a href="#" className="brand-logo center">
                                    <img src={logo} width="45" height="45">
                                    </img>
                                </a>
                             </div>
                            <Form.Group controlId="username">
                                <Field name="username" type="text" component="input" autoComplete="none" placeholder="Username" />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Field name="password" type="password" component="input" autoComplete="none" placeholder="Password" />
                            </Form.Group>

                            <div>{this.props.errorMessage}</div>
                            <div className="row">
                                <div className=" app-links col-lg-8">
                                    <Link to='/signup'>Don't have an account? SignUp</Link>
                                </div>
                                <div className="col-lg-4">
                                    <button className="btn waves-effect waves-light" type="submit">
                                        Login
                                     </button>
                                </div>
                            </div>
                        </Form>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
)(Signin);