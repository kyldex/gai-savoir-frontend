import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gai Savoir Accueil</title>
        <meta
          name="description"
          content="Le Gai Savoir est une plateforme de contenus intellectuel, artistique et citoyen visant à se libérer de la logique de segmentation propres à la politique et aux industries culturelles et créatives."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* TODO: créer un h1 */}
      <div className={styles.slogan}>
        &quot;Vous n&apos;êtes pas chez le psy, vous n&apos;êtes pas chez le
        prêtre mais vous avez la parole quand même&quot;
      </div>

      <p className={styles.description}>
        Le Gai Savoir est une plateforme de contenus intellectuel, artistique et
        citoyen visant à se libérer de la logique de segmentation propres à la
        politique et aux industries culturelles et créatives. La plateforme du
        Gai Savoir réunit des productions de personnalités de notoriétés
        diverses (faible à forte), de profils différents dans l&apos;espoir de
        croiser les publics et échapper aux bulles des réseaux sociaux.
        <br />
        Elle a pour ambition d&apos;être un vivier de talents et de liberté
        autour d&apos;une philosophie qui réconcilie la pensée et
        l&apos;émotion, la réussite (ou performance) et l&apos;expression de
        soi.
        <br />
        La ligne éditoriale du Gai Savoir repose sur deux principes : • La
        singularité ne s&apos;oppose pas à l&apos;universalisme. • Le désaccord
        respectueux comme nouveau mode de débat.
        <br />
        S&apos;inspirant de la démarche artistique qui repose sur le doute et la
        volonté de partager largement sa sensibilité, le Gai Savoir définit la
        singularité comme l&apos;équilibre -plus ou moins précaire- que chacun
        trouve avec la norme (professionnelle, sociale, de genre, etc…)
        d&apos;une époque. C&apos;est dans ce frottement qu&apos;émerge la
        singularité.
        <br />
        Le désaccord est pensé comme une rencontre radicale et nécessaire de
        l&apos;Autre, le respect comme son principe élémentaire. L&apos;objectif
        est de montrer qu&apos;il ne mène pas forcément à la rupture.
        <br />
        Enfin, le Gai Savoir assume une programmation évènementielle et
        audiovisuelle qui divertisse : le contenu produit se veut ludique, pour
        susciter éveil et curiosité.
        <br />
        Qu&apos;il s&apos;agisse d&apos;idées, de productions artistiques ou
        d&apos;initiatives citoyennes, le Gai Savoir a pour ambition de sortir
        de la tradition du salon et d&apos;associer exigence de la pensée,
        sincérité de l&apos;émotion et légèreté de l&apos;amusement.
        <br />
        Le Gai Savoir est le pari d&apos;une exploration radicale, celle de la
        rencontre de l&apos;autre. La promesse d&apos;un espace de retrouvailles
        intergénérationnel pour accueillir la nostalgie du monde d&apos;avant et
        se saisir collectivement de l&apos;incertitude du monde d&apos;après.
      </p>
    </div>
  );
};

export default Home;
