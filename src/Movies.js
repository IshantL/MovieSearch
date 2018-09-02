
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import Search from './Search';
import SortBy from './SortBy';

class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {
          todos: '',
          currentPage: 1,
          todosPerPage: 20,
          movies: [],
          filterMovies: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.onInput = this.onInput.bind(this);
        this.onSort = this.onSort.bind(this);
    }

      onInput(query) {
    let filterData =  this.state.movies.filter((obje) => obje.movie_title.toLowerCase().startsWith(query.toLowerCase()));
    this.setState({filterMovies: filterData,
                currentPage:1  
    });
  }
  
  onSort (value) {
    let sortData;
    if(value==='title_year'){
      sortData = this.state.movies.sort((a, b) => a.title_year - b.title_year);
      this.setState({filterMovies: sortData,
                    currentPage:1  
      }); 
    }else if(value==='content_rating'){
      sortData = this.state.movies.sort((a, b) => a.content_rating > b.content_rating);
      this.setState({filterMovies: sortData,
                     currentPage:1  }); 
    }

  }

 handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
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
        const { currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.state.filterMovies.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((movie, index) => {
          return <li key={movie.id}>
          <Movie {...movie} />
          </li>
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.filterMovies.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
          );
        });

        return (
          <div>
           <Search onInput={this.onInput} placeholder="Search for Movie Title …" />
            <SortBy onSort={this.onSort}/>
           <div align="right">Page No: {this.state.currentPage} of {pageNumbers.length}</div>
           <ul className="movies">
            {renderTodos}
          </ul>
          <div align="center">Page No: {this.state.currentPage} of {pageNumbers.length}</div>
          <ul id="page-numbers">
            {renderPageNumbers}
          </ul>
          </div>
        );
      }

}
Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
};

export default Movies;
