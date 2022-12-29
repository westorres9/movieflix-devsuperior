import { useParams } from 'react-router-dom';
import { hasAnyRoles } from 'util/auth';
import Evaluation from 'components/Evaluation';
import Comment from 'components/Comment';

import './styles.css';


type UrlParams = {
  moviesId: string;
};

const MovieDetails = () => {
  const { moviesId } = useParams<UrlParams>();

  return (
    <div className="movie-details-container">      
        <h2>Tela detalhes do filme id: {moviesId}</h2>        
          {hasAnyRoles(['ROLE_MEMBER']) && <Evaluation movieId={moviesId} />}
           <div>
             <Comment movieId={moviesId} />
             </div>
     </div>     
  );
};

export default MovieDetails;
