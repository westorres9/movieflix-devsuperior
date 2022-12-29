import './styles.css';


type Props = { text: string;}

const ButtonIcon = ({text}:Props) => {
  return (
    <div className="btn-normal-container">
      <button className="btn-normal btn-primary">
        <h6>{text}</h6>
      </button>   
    </div>
  );
};

export default ButtonIcon;
