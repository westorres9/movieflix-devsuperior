import ButtonIcon from 'components/ButtonIcon';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { requestPostEvaluation } from 'util/requests';


import './styles.css';

type Props = {
  movieId: string;
};

type FormData = {
  movieId: number;
  text: string;
};

const Evaluation = ({ movieId }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();

  const [, setHasError] = useState(false);

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);
    
    requestPostEvaluation(formData)
    .then((response) => {
      setHasError(false);
      window.location.reload();
    })
    .catch((error) => {
      setHasError(true);
    });
   
  };

  return (
    <div className="base-card evaluation-card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('text')}
            type="text"
            className="form-control evaluation-input base-input"
            placeholder="Deixe a sua avaliação aqui"
            name="text"
          />
        </div>
        <div className="evaluation-submit">
          <ButtonIcon text="Salvar Avaliação" />
        </div>
      </form>
    </div>
  );
};

export default Evaluation;

