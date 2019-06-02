import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Cards from '../components/cards'
import '../css/dashboardandcards.css';





class Dashboard extends Component {
    render() {
        return (
            <div className="center">
                {this.props.name.map((value, key) => {
                    return (
                        <div>
                            <br></br>
                            <Cards key={value.username} data={value.password} user={value.username} task={value.task}/>
                        </div>
                    )
                }
                )}
            </div>

        );
    }
}

export default Dashboard;
