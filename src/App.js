import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div>
      <div className="header-div">Movie Card Library CRUD</div>
      <BrowserRouter>
        <div className="button-div">
          <Link to="/movies/new" className="waves-effect waves-light btn">
            ADICIONAR CARTÃO
          </Link>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <MovieList /> }
          />
          <Route
            exact
            path="/movies/new"
            render={ (props) => <NewMovie { ...props } /> }
          />
          <Route
            exact
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route
            exact
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
      {/* <footer className="page-footer">
        <h6>Matheus Tkaczyk Ribeiro 10/07/2021</h6>
      </footer> */}
    </div>
  );
}

export default App;
