import React, { Component } from 'react';
import Education from './Education.js';
import Hello from './Hello.js'
import './App.css';
import faiber from "./faiber.jpg"
import Logos from './Logos.js'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">

              <Hello profile={faiber} />

          </header>

        </div>
        <div className = 'conta'>
          <Education title="Education" text-align = 'center' />


          <Education title="Hobbies" />
          
        </div>
        <div className = 'logos'>
        <Logos />
        </div>
        </div>
    );
  }
}

export default App;
