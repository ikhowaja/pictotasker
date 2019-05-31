import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import '../css/loginandsignup.css';
import { Form, Button } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import logo from '../images/Logo.png'
import { Link } from 'react-router-dom'



class Signup extends Component {


    render() {

        return (
            <div className="Signup">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 myform">
                        <img className="profile-img" src={logo} alt=""></img>
                        <Form >
                            <Form.Group controlId="username">
                                <Field name="username" type="text" component="input" autoComplete="none" placeholder="Username" className="form-control" />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Field name="password" type="password" component="input" autoComplete="none" placeholder="Password" className="form-control" />
                            </Form.Group>
                            <Form.Group controlId="FullName">
                                <Field name="fullname" type="text" component="input" autoComplete="none" placeholder="FullName" className="form-control" />
                            </Form.Group>
                            <Form.Group controlId="country">
                                <Field name="country" type="text" component="input" autoComplete="none" placeholder="Country" className="form-control" />
                            </Form.Group>

                            <div>{this.props.errorMessage}</div>
                            <Button className="btn btn-round-lg btn-primary btn-block" type="submit">Signup</Button>
                            <Link to="/login">
                                <h6>      Click Here For SignUp!</h6>
                            </Link>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}



export default compose(

    reduxForm({ form: 'signup' })
)(Signup)