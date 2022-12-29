import { ReactComponent as Star } from 'assets/images/star.svg';
import './styles.css';

type Props = {
  name: string;
  text: string;
};

const CommentDetails = ({ name, text }: Props) => {
  return (
    <div className="comment-details-container">
      <div className="comment-details-header">
        <Star />
        <h1>{name}</h1>
      </div>
      <div className="comment-details-card">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CommentDetails;