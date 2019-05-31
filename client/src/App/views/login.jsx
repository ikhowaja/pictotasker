import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import '../css/loginandsignup.css';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import logo from '../images/Logo.png'
import { Link } from 'react-router-dom'



class Login extends Component {
    onSubmit = formProps => {
        this.props.login(formProps, () => {
            this.props.history.push('/namelist');
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
                        <Form onSubmit={handleSubmit(this.onSubmit)}>>
                                        <FormGroup>
                                <FormControl type="text" className="form-control" placeholder="Username" required></FormControl>
                                <FormControl type="password" className="form-control" placeholder="Password" required></FormControl>

                            </FormGroup>
                            <Button className="btn btn-round-lg btn-primary btn-block" type="submit">Login</Button>


                            <Link to="/signup">
                                <h6>      Click Here For SignUp!</h6>
                            </Link>
                        </Form>
                    </div>
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
    reduxForm({ form: 'login' })
)(Login);
