
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

class Movies extends Component {

  render() {    
    return (
      <div >
      <ul className="movies">
        {this.props.movies.map(movie => (
          <li key={movie.id}>
          <Movie {...movie} />
          </li>
        ))}
     </ul>
      </div>
    );
  }

}

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
};

export default Movies;

