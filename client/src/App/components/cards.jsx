import React, { Component } from 'react';
import image from '../images/osama.jpg'
import '../css/dashboardandcards.css';



class Cards extends Component {

    render() {
        var val=('#'+this.props.user).toString()
        return (
            <div className="ui card">
                <div className="content">
                    <img className="ui large avatar imagef left floated meta" src={image} alt="first" />
                    <span className=" left floated meta profilename"><b>{this.props.user}</b></span>
                </div>
                <div className="image">
                    <img src={image} alt="second" />
                </div>
                <div className="content">
                    <span className="left floated">
                        <i className="circular thumbs up outline icon"></i>
                        17 likes
              </span>
                </div>
                <div className="extra content">
                    <div className="ui large transparent left icon input">
                      <a data-toggle="collapse" data-target={val}> Tasks</a>
                      <br></br>
                        <div id={this.props.user} className="collapse">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;