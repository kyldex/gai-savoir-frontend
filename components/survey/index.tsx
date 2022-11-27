import type { NextPage } from 'next';
import styles from './index.module.css';

interface FormData {
  firstName: string;
  lastName: string;
}

const Survey: NextPage = () => {
  return (
    <div className={styles.container}>
      Survey
    </div>
  );
};

export default Survey;
