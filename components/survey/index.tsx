import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import styles from './index.module.css';

interface FormData {
  firstName: string;
  lastName: string;
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
      firstName: '',
      lastName: '',
      question1: '',
      question2: ''
    }
  });
  const onSubmit = handleSubmit((data) => console.log(data));
  console.log(errors);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label}>Prénom</label>
        <input
          className={styles.input}
          {...register('firstName', { required: 'Ce champ est requis.' })}
        />
        <p className={styles.errorMessage}>{errors.firstName?.message}</p>

        <label className={styles.label}>Nom</label>
        <input
          className={styles.input}
          {...register('lastName', { required: 'Ce champ est requis.' })}
        />
        <p className={styles.errorMessage}>{errors.lastName?.message}</p>

        <label className={styles.label}>Quelles chansons vous évoquent la réconciliation ?</label>
        <input
          className={styles.input}
          {...register('question1', { required: 'Ce champ est requis.' })}
        />
        <p className={styles.errorMessage}>{errors.question1?.message}</p>

        <label className={styles.label}>Quel film récent vous évoque le plus le climat politique actuel ?</label>
        <input
          className={styles.input}
          {...register('question2', { required: 'Ce champ est requis.' })}
        />
        <p className={styles.errorMessage}>{errors.question2?.message}</p>

        <button type="submit" className={styles.submit}>Submit</button>
      </form>
    </div>
  );
};

export default Survey;
