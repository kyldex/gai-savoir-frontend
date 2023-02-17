import type { NextPage } from 'next';
import Head from 'next/head';

import styles from './index.module.scss';

const Apropos: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>À propos</title>
        <meta name="description" content="À propos du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className={styles.title}>À propos</h2>

      <div className={styles.description}>
        <p className={styles.descriptionPart}>
          Le Gai Savoir est une plateforme de contenus intellectuel, artistique
          et citoyen visant à se libérer de la logique de segmentation propres à
          la politique et aux industries culturelles et créatives. La plateforme
          du Gai Savoir réunit des productions de personnalités de notoriétés
          diverses (faible à forte), de profils différents dans l&apos;espoir de
          croiser les publics et échapper aux bulles des réseaux sociaux.
        </p>
        <p className={styles.descriptionPart}>
          Elle a pour ambition d&apos;être un vivier de talents et de liberté
          autour d&apos;une philosophie qui réconcilie la pensée et
          l&apos;émotion, la réussite (ou performance) et l&apos;expression de
          soi.
        </p>
        <p className={styles.descriptionPart}>
          La ligne éditoriale du Gai Savoir repose sur deux principes :
        </p>
        <p className={styles.descriptionPart}>
          • La singularité ne s&apos;oppose pas à l&apos;universalisme.
        </p>
        <p className={styles.descriptionPart}>
          • Le désaccord respectueux comme nouveau mode de débat.
        </p>
        <p className={styles.descriptionPart}>
          S&apos;inspirant de la démarche artistique qui repose sur le doute et
          la volonté de partager largement sa sensibilité, le Gai Savoir définit
          la singularité comme l&apos;équilibre -plus ou moins précaire- que
          chacun trouve avec la norme (professionnelle, sociale, de genre, etc…)
          d&apos;une époque. C&apos;est dans ce frottement qu&apos;émerge la
          singularité.
        </p>
        <p className={styles.descriptionPart}>
          Le désaccord est pensé comme une rencontre radicale et nécessaire de
          l&apos;Autre, le respect comme son principe élémentaire.
          L&apos;objectif est de montrer qu&apos;il ne mène pas forcément à la
          rupture.
        </p>
        <p className={styles.descriptionPart}>
          Enfin, le Gai Savoir assume une programmation évènementielle et
          audiovisuelle qui divertisse: le contenu produit se veut ludique, pour
          susciter éveil et curiosité.
        </p>
        <p className={styles.descriptionPart}>
          Qu&apos;il s&apos;agisse d&apos;idées, de productions artistiques ou
          d&apos;initiatives citoyennes, le Gai Savoir a pour ambition de sortir
          de la tradition du salon et d&apos;associer exigence de la pensée,
          sincérité de l&apos;émotion et légèreté de l&apos;amusement.
        </p>
        <p className={styles.descriptionPart}>
          Le Gai Savoir est le pari d&apos;une exploration radicale, celle de la
          rencontre de l&apos;autre. La promesse d&apos;un espace de
          retrouvailles intergénérationnel pour accueillir la nostalgie du monde
          d&apos;avant et se saisir collectivement de l&apos;incertitude du
          monde d&apos;après.
        </p>
      </div>
    </div>
  );
};

export default Apropos;
