import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.MovieDel = this.MovieDel.bind(this);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    const fetch = getMovie(id);
    fetch.then(
      (data) => this.setState({
        loading: false,
        movie: data,
      }),
    );
  }

  MovieDel(id) {
    const { deleteMovie } = movieAPI;
    deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    const { loading, movie } = this.state;
    if (loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    // title
    return (
      <div className="movie-details-div" data-testid="movie-details">
        <img className="image-tag" alt="Movie Cover" src={ `../${imagePath}` } />
        <div className="movie-details-info">
          <h1>{ `Title: ${title}` }</h1>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div>
          <Link
            className="waves-effect waves-light btn botoes"
            to={ `/movies/${id}/edit` }
          >
            EDITAR
          </Link>
          <Link
            className="waves-effect waves-light btn orange botoes"
            to="/"
          >
            VOLTAR
          </Link>
          <Link
            className="waves-effect waves-light btn red botoes"
            to="/"
            onClick={ () => this.MovieDel(id) }
          >
            DELETAR
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};
