import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      shouldRedirect: 'NO',
    };
  }

  handleSubmit(newMovie) {
    const { createMovie } = movieAPI;
    const fetch = createMovie(newMovie);
    fetch.then((data) => this.setState({
      shouldRedirect: data,
    }));
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect === 'OK') {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
