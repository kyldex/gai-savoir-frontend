import type { Metadata } from 'next';
import styles from './styles.module.scss';
import HomePageLink from '../../components/common/HomePageLink';
// import Survey from '../../components/survey';

export const metadata: Metadata = {
  title: 'Observatoire des perceptions',
  description: 'Gai Savoir - Observatoire des perceptions'
};

export default function ObservatoireDesPerceptionsPage() {
  return (
    <div className={styles.container}>
      <HomePageLink />

      <h1 className={styles.title}>Observatoire des perceptions</h1>

      <p className={styles.description}>
        L&apos;observatoire des perceptions est un concept unique qui vise à
        récolter les représentations des français et créer de la data autour du
        populaire.
        <br />
        Stay tuned, ça arrive vite.
      </p>

      {/* <Survey /> */}
    </div>
  );
}
