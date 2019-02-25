import React, { Component } from 'react';

class Education extends Component {
  render(){
    return(
      <div className = 'cont'> 
      <div className = 'tittle'> {this.props.title }</div>

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
    )
  }
}

export default Education;