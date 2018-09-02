import React, { Component } from 'react';
import './App.css';
import Movies from './Movies';


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      movies: [],
      filterMovies:[]
    };
  }

 
  render() {
    
    return (
      <div className="app">
        <Movies />
      </div>
    );
  }
}

export default App;


