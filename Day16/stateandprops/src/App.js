import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import State from './State';
import StudentList from './StudentList';

class App extends Component {
  render() {
    return (
      <div>
        {/* <State/> */}
        <StudentList/>
      </div>
    );
  }
}

export default App;
