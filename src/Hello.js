import React, { Component } from 'react';

class Hello extends Component {
  render(){
    return(
      <div>
      
      <div> Faiber Fabian Rodriguez Betancurt</div>
      <br></br>
      <div><img src = {this.props.profile} className = 'profile'></img></div>
      <br></br>
      <div> Back-end engineer, specialized in RoR but also comfortable with Python</div>
      </div>
    )
  }
}

export default Hello;