import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import '../css/profileandpcards.css';
import image from '../images/osama.jpg'
import Pcards from '../components/pcards'
import M from "materialize-css";


class Profile extends Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, { opacity: 0.5 });

    }
    render() {
        return (
            <div className="center">
                <br></br>
                <div className="row">
                    <div className="col s12 m7">
                        <div className="card">
                            <h1 className="PofileTitile">Hall of Fame</h1>
                            <img src={image} className="ProfileImage"></img>
                            <span className="card-title"><b>Osama Ahmed Tahir</b></span>
                            <a className="waves-effect waves-light btn-small modal-trigger" href="#modal1">Edit Profile</a>
                            <div id="modal1" className="modal">
                                <div className="modal-content">
                                    <h4>Modal Header</h4>
                                    <p>A bunch of text</p>
                                </div>
                                <div className="modal-footer">
                                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                                </div>
                            </div>
                            <div className="card-content">
                                <h3 className="PofileTitile">Tasks Completed</h3>

                                <Pcards></Pcards>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Profile;
