import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/dashboardandcards.css';



class Cards extends Component {

    render() {
        var val = ('#' + this.props.user).toString()
        return (
            
            <div className="ui card">
                <div className="content">
                    <span className=" left floated meta profilename"><b>{this.props.user}</b></span>
                </div>
               

                <div className="extra content">
                    <div className="ui large transparent left icon input">
                        <a data-toggle="collapse" data-target={val}> Tasks</a>
                        <br></br>
                        <div id={this.props.user} className="collapse">
                               {this.props.task}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;