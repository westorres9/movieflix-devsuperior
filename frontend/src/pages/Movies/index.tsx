import { Link } from 'react-router-dom';

import './styles.css';

const Movie = () => {
  return (
    <div className=" movie-container">
      <h1>Tela listagem de filmes</h1>
      <div className="movie-list-container">
        <ul>
          <Link to="/movies/1">
            <li>Acessar /movies/1</li>
          </Link>
          <Link to="/movies/2">
            <li>Acessar /movies/2</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Movie;
