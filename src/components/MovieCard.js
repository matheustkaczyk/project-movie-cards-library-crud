import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { storyline, title, imagePath, id } = movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <p>{ title }</p>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
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
    key: PropTypes.string,
  }).isRequired,
};
