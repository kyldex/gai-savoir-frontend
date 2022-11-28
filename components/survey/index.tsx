import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import styles from './index.module.css';

interface FormData {
  genre: string;
  question1: string;
  question2: string;
}

const Survey: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      genre: 'un homme',
      question1: '',
      question2: ''
    }
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <p className={styles.gender}>Vous êtes :</p>
        <div className={styles.radioGroup}>
          <input
            type="radio"
            id="radio-selection-1"
            value="un homme"
            {...register('genre')}
          />
          <label htmlFor="radio-selection-1" className={styles.inputRadioLabel}>un homme</label>

          <input
            type="radio"
            id="radio-selection-2"
            value="une femme"
            {...register('genre')}
          />
          <label htmlFor="radio-selection-2" className={styles.inputRadioLabel}>une femme</label>

          <input
            type="radio"
            id="radio-selection-3"
            value="autre"
            {...register('genre')}
          />
          <label htmlFor="radio-selection-3" className={styles.inputRadioLabel}>autre</label>
        </div>

        <label className={styles.inputTextLabel}>
          Quelles chansons vous évoquent la réconciliation ?
        </label>
        <input
          type="text"
          className={styles.input}
          {...register('question1', { required: 'Ce champ est requis.' })}
        />
        <p className={styles.errorMessage}>{errors.question1?.message}</p>

        <label className={styles.inputTextLabel}>
          Quel film récent vous évoque le plus le climat politique actuel ?
        </label>
        <input
          type="text"
          className={styles.input}
          {...register('question2', { required: 'Ce champ est requis.' })}
        />
        <p className={styles.errorMessage}>{errors.question2?.message}</p>

        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Survey;
