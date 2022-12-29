import Navbar from 'components/Navbar';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'util/history';
import Home from 'pages/Home';
import PrivateRoute from 'components/PrivateRoute';
import MovieRoute from 'pages/MovieRoute';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <PrivateRoute path="/movies">
        <MovieRoute />
      </PrivateRoute>   
    </Switch>
  </Router>
);

export default Routes;
