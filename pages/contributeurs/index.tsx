import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from './index.module.scss';

import HomePageLink from '../../components/common/HomePageLink';
import Contributor from '../../components/common/Contributor';

import papers from '../../assets/img/contributors/papers.svg';
import whiteStar from '../../assets/img/home/star_white.svg';
import contributorsData from '../../data/contributors';

const ContributeursPage: NextPage = () => {
  const currentLetters = ['A', 'J', 'L', 'R', 'W'];

  const filterByLastName = (letter: string) => {
    const filteredContributors = contributorsData.filter((contributor) => {
      return contributor.lastName.startsWith(letter);
    });
    return filteredContributors;
  };

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
        {currentLetters.map((letter) => (
          <div className={styles.letterContainer} key={letter}>
            <div className={styles.letter}>{letter}</div>
            <div>
              {filterByLastName(letter).map((contributor) => (
                <div
                  className={styles.contributorContainer}
                  key={contributor.id}
                >
                  <Contributor
                    firstName={contributor.firstName}
                    lastName={contributor.lastName}
                    description={contributor.description}
                    imageUrl={contributor.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributeursPage;
