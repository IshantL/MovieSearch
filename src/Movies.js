
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {
          todos: '',
          currentPage: 1,
          todosPerPage: 20
        };
        this.handleClick = this.handleClick.bind(this);
    
    }
 handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

render() {
        const { currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.props.movies.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((movie, index) => {
          return <li key={movie.id}>
          <Movie {...movie} />
          </li>
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.movies.length / todosPerPage); i++) {
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
           <ul className="movies">
            {renderTodos}
          </ul>
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
