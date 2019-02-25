import React, { Component } from 'react';
import Education from './Education.js';
import Hello from './Hello.js'
import './App.css';
import faiber from "./faiber.jpg"

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <p>
              <Hello profile={faiber} />
            </p>
          </header>

        </div>
        <div className = 'Container'>
          <Education title="Education" />


          <Education title="Other" />
        </div>
        </div>
    );
  }
}

export default App;
