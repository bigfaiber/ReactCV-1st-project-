import React, { Component } from 'react';

class Education extends Component {
  render(){
    return(
      <div>
      {this.props.title}
      <div class = 'cont'> 
        <ul>
          <li>
            Financial Engineer from Universidad Autonoma de Bucaramanga
          </li>
          <li>
            Systems Engineer from Universidad Distrital Francisco Jose de Caldas
          </li>
          <li>
            Full Stack Developer Bootcamp in Bogota Dev
          </li>
        </ul>
      </div>
      <br></br>
     
      </div>
    )
  }
}

export default Education;