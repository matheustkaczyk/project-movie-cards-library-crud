import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { storyline, title, imagePath, id } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img className="image-tag" src={ imagePath } alt={ title } />
        <div className="text-tags">
          <h4>{ title }</h4>
          <p>{ storyline }</p>
          <Link className="btn-small" to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
