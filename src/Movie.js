import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Movie extends Component {

  render() {    
    return (
      <div className="movie">
    <figure>
      <img src={''} />
      <figcaption>
        <h2 className="movie__title">{this.props.movie_title} ({this.props.title_year})</h2>
        <span className="card">Director : {this.props.director_name} | Actors : {this.props.actor_1_name},{this.props.actor_2_name} | Genres : {this.props.genres} | Language : {this.props.language} | Country : {this.props.country} | ContentRating : {this.props.content_rating}</span>
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