import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import Vcards from '../components/vcards'





class videochat extends Component {
  constructor(props) {
    super(props)
    this.state = {

      username: ''

    }

  }




  render() {
    // console.log(this.state.show)
    

    
    // if (this.state.show === false) {
    
    //   socket.emit('Data', { caller: '', showstate: false }, function (data, err) {
    //     console.log(err);
    //   })
    //   socket.on("Data", function (data, err) {
    //     if (data) {
    //       self.setState({ newcalled: data.caller, show: data.showstate });
    //       console.log(data)
    //     }
    //     else {
    //       console.log("No Connection")
    //     }
    //   })
    // }

    return (
      <div className="nameList">
      <div className="container">
     
         
          <div className="row">
            {this.props.name.map((value, key) => {
              return (
                <div className="col-lg-4">
                
                  <Vcards key={value.username} data={value}  />

                </div>
              )
            })
            }

        </div>
        </div>
      </div>
    );
  }
}
export default videochat;