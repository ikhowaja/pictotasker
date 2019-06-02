import React, { Component } from 'react';
import image from '../images/osama.jpg'
import '../css/dashboardandcards.css';
import { Checkbox } from 'react-materialize';




class Pcards extends Component {

    render() {
        return (
            <div className="col s11">
                <div className="card horizontal">
                    <div className="card-stacked"></div>
                    <div className="card-content">
                       
                        <div className="tasktext">
                        <ul>
                            <li><Checkbox /> <p className="tasklist">Get Apple</p></li>
                            <li><Checkbox /> <p className="tasklist">Get Apple</p></li>
                            <li><Checkbox /> <p className="tasklist">Get Apple</p></li>
                            <li><Checkbox /> <p className="tasklist">Get Apple</p></li>
                           
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pcards;