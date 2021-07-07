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
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ `Title: ${title}` }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={ () => this.MovieDel(id) }>DELETAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};
