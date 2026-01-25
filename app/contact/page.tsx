import type { Metadata } from 'next';
import styles from './styles.module.css';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Contacter l'équipe du Gai Savoir"
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>

      <p className={styles.description}>
        Ariane Ahmadi est la présidente de l&apos;association du Gai Savoir.
        <br />
        Pour la contacter : mail@gmail.com
      </p>
    </div>
  );
}
