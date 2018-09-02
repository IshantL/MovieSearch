import React, { Component } from 'react';
import './App.css';
import Movies from './Movies';
import Search from './Search';
import SortBy from './SortBy';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      movies: [],
      filterMovies: []
    };
    
    this.onInput = this.onInput.bind(this);
    this.onSort = this.onSort.bind(this);
  }
  
  onInput(query) {
    let filterData =  this.state.movies.filter((obje) => obje.movie_title.toLowerCase().startsWith(query.toLowerCase()));
    this.setState({filterMovies: filterData});
  }
  
  onSort (value) {
    let sortData;
    if(value==='title_year'){
      sortData = this.state.movies.sort((a, b) => a.title_year - b.title_year);
      this.setState({filterMovies: sortData}); 
    }else if(value==='content_rating'){
      sortData = this.state.movies.sort((a, b) => a.content_rating > b.content_rating);
      this.setState({filterMovies: sortData}); 
    }

  }

  getPopularMovies() {
    const url = `http://starlord.hackerearth.com/movieslisting`;
    fetch (url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data,
          filterMovies: data
        })
      });
  }
    
  componentDidMount() {
    this.getPopularMovies();  
  }
  
  render() {
    const { movies, filterMovies } = this.state;
  
    return (
      <div className="app">
        <Search onInput={this.onInput} placeholder="Search for Movie Title …" />
        <SortBy onSort={this.onSort}/>
        <Movies movies={filterMovies} />
      </div>
    );
  }
}

export default App;


