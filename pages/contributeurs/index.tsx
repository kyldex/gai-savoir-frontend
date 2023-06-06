import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from './index.module.scss';

import HomePageLink from '../../components/common/HomePageLink';
import Contributor from '../../components/common/Contributor';

import papers from '../../assets/img/contributors/papers.svg';
import whiteStar from '../../assets/img/home/star_white.svg';

const ContributeursPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contributeurs</title>
        <meta name="description" content="Gai Savoir - Contributeurs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageLink />

      <h1 className={styles.title}>Contributeurs</h1>

      <div className={styles.illustationsContainer}>
        <Image src={papers} width={60} alt="" />
        <Image src={whiteStar} width={70} className={styles.whiteStar} alt="" />
      </div>

      <div className={styles.contributors}>
        <div className={styles.letterContainer}>
          <div className={styles.letter}>A</div>
          <div className={styles.contributorContainer}>
            <Contributor
              firstname="Ariane"
              lastname="Ahmadi"
              description="Fondatrice de la plateforme du Gai Savoir est conseillère en communication politique, corporate et en stratégie de marque. Elle s’est spécialisée sur la fabrique de l’authenticité et d’un parler juste."
              imageUrl="https://res.cloudinary.com/dhj1ij2pz/image/upload/v1686078456/ariane_ahmadi_photo_portrait_y0ed3h.png"
            />
          </div>
        </div>

        <div className={styles.letterContainer}>
        <div className={styles.letter}>J</div>
          <div className={styles.contributorContainer}>
            <Contributor
              firstname="Quentin"
              lastname="Jagorel"
              description="Quentin Jagorel a réalisé plusieurs fictions et documentaires. En 2020, il co-réalise avec Benjamin Rassat une série d'entretiens filmés avec l'historien Marc Ferro (Les Images de Marc). En 2022, il signe le documentaire 'Commue une personne', diffusé en février 2023 sur KTO TV."
            />
          </div>
        </div>

        <div className={styles.letterContainer}>
        <div className={styles.letter}>L</div>
          <div className={styles.contributorContainer}>
            <Contributor
              firstname="Constance"
              lastname="Léculée"
              description="Constance Léculée est psychiatre, notamment auprès de personnes détenues."
            />
          </div>
        </div>

        <div className={styles.letterContainer}>
        <div className={styles.letter}>R</div>
          <div className={styles.contributorContainer}>
            <Contributor
              firstname="Aube"
              lastname="Richebourg"
              description="Aube Richebourg, doctorante en sociologie et auteure d'une thèse sur l'Internet libre."
            />
          </div>
        </div>

        <div className={styles.letterContainer}>
        <div className={styles.letter}>W</div>
          <div className={styles.contributorContainer}>
            <Contributor
              firstname="Ines"
              lastname="Weill"
              description="Ines Weill Rochant est auteure, actrice et ingénieure culturelle. Elle a publié avec Kenza Aloui, Saenz Delacroix-Sadighiyan et Odelia Kammoun la BD Une nuit aux editions First."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributeursPage;
