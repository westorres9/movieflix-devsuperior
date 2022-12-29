import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import { Switch, Route } from 'react-router-dom';

const MovieRoute = () => (
    <Switch>
    <Route path="/movies" exact>
      <Movies />
    </Route>
    <Route path="/movies/:moviesId">
      <MovieDetails />
    </Route>
  </Switch>
)
export default MovieRoute;