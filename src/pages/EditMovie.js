import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';
// import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const movie = getMovie(id);
    movie.then((data) => this.setState({
      loading: false,
      movie: data,
    }));
  }

  handleSubmit(updatedMovie) {
    const update = updateMovie(updatedMovie);
    update.then((data) => this.setState({
      shouldRedirect: data,
    }));
  }

  render() {
    const { shouldRedirect, movie, loading } = this.state;
    if (shouldRedirect === 'OK') {
      // Redirect
      return <Redirect to="/" />;
    }

    if (loading) {
      // render Loading
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
