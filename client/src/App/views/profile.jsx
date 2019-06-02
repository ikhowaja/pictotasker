import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import '../css/profileandpcards.css';
import image from '../images/osama.jpg'
import Pcards from '../components/pcards'
import M from "materialize-css";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            fullname: '',
            country: '',
            name: this.props.name
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeFullName = this.handleChangeFullName.bind(this);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      
    }
    handleChangeUsername(e) {
        this.setState({ username: e.target.value });
    }
    handleChangePassword(e) {
        this.setState({ password: e.target.value });
    }
    handleChangeFullName(e) {
        this.setState({ fullname: e.target.value });
    }
    handleChangeCountry(e) {
        this.setState({ country: e.target.value });
    }

    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, { opacity: 0.5 });
    }
    onSubmit(e) {
        document.getElementById("update-form").reset();
        var self = this;
        e.preventDefault();
        axios.post('https://infinite-oasis-18891.herokuapp.com/users/update', {
            username: self.state.username,
            password: self.state.password,
            fullname: self.state.fullname,
            country: self.state.country
        })
            .then(function (response) {
                const current = self.state.name;
                const newname = current.concat(response.data.user);
                self.setState({ name: newname });
                console.log(self.state.name)
            }).catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <div className="Add">
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <Form onSubmit={this.onSubmit} id="update-form">
                                    <div className="form-header">
                                        Update User
                                     </div>
                                    <Form.Control type="text" placeholder="Username" className="username" onChange={this.handleChangeUsername} />
                                    <Form.Control type="password" placeholder="Password" className="password" onChange={this.handleChangePassword} />
                                    <Form.Control type="text" placeholder="Full Name" className="fullname" onChange={this.handleChangeFullName} />
                                    <Form.Control type="text" placeholder="Country" className="country" onChange={this.handleChangeCountry} />
                                    <Button variant="primary" type="submit" className="text-capitalize modal-close">Update</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <br></br>
                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card">
                                <h1 className="PofileTitile">Hall of Fame</h1>
                                <img src={image} className="ProfileImage"></img>
                                <span className="card-title"> {localStorage.getItem('user')}</span>
                                <a className="waves-effect waves-light btn-small modal-trigger" href="#modal1">Edit Profile</a>
                                <br></br>
                                <Link to="/videochat" className="waves-effect waves-light btn-small">Call Someone</Link>
                                <br></br>
                                <Link to="/videochat" className="waves-effect waves-light btn-small">Chat Global Group</Link>
                               
                                <div className="card-content">
                                    <h3 className="PofileTitile">Tasks Completed</h3>
                                    <Pcards></Pcards>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Profile;
