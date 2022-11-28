import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gai Savoir Home Page</title>
        <meta name="description" content="Gai Savoir informations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Bienvenue sur le site du Gai Savoir</h1>

      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        consequat magna non felis volutpat, a pharetra justo commodo. Ut in
        sodales velit, ac feugiat magna. Duis placerat, nisl a molestie
        sollicitudin, risus massa elementum lectus, sed sodales justo eros quis
        velit. Phasellus nec pharetra lorem, sit amet consectetur diam. Quisque.
      </p>
    </div>
  );
};

export default Home;
