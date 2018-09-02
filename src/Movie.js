import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Movie extends Component {

  render() {    
    return (
      <div className="movie">
    <figure>
      <img src={''} />
      <figcaption>
        <h2 className="movie__title">{this.props.movie_title}</h2>
      </figcaption>
    </figure>
  </div>
 );
  }

}

Movie.propTypes = {
  id         : PropTypes.number.isRequired,
  title      : PropTypes.string.isRequired,
  poster_path: PropTypes.string
};

 export default Movie;