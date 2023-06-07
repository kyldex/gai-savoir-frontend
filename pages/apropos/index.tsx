import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from './index.module.scss';

import HomePageLink from '../../components/common/HomePageLink';
import Contributor from '../../components/common/Contributor';

import megaphoneTexture from '../../assets/img/a-propos/megaphone-texture.svg';
import logo from '../../assets/img/gai_savoir_logo.svg';

const Apropos: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>À propos</title>
        <meta name="description" content="À propos du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.homePageLinkContainer}>
        <HomePageLink />
      </div>

      <h1 className={styles.title}>
        À PROPOS
        <br />
        DU GAI SAVOIR
      </h1>

      <Image
        src={megaphoneTexture}
        width={140}
        className={styles.megaphone}
        alt=""
      />

      <div className={styles.description}>
        <p className={styles.highlights}>
          Le Gai Savoir est une plateforme de contenus intellectuels,
          artistiques et citoyens visant à se libérer de la logique de
          segmentation propre à la politique et aux industries culturelles et
          créatives.
        </p>

        <div className={styles.descriptionParts}>
          <p className={styles.descriptionPart}>
            La plateforme du Gai Savoir réunit des productions de personnalités
            de notoriétés diverses (faible à forte), de profils différents dans
            l&apos;espoir de croiser les publics et échapper aux bulles des
            réseaux sociaux.
          </p>
          <p className={styles.descriptionPart}>
            Elle a pour ambition d&apos;être un vivier de talents et de liberté
            autour d&apos;une philosophie qui réconcilie la pensée et
            l&apos;émotion, la réussite (ou performance) et l&apos;expression de
            soi.
          </p>
          <p className={styles.descriptionPart}>
            La ligne éditoriale du Gai Savoir repose sur deux principes :<br />
            • La singularité ne s&apos;oppose pas à l&apos;universalisme.
            <br />• Le désaccord respectueux comme nouveau mode de débat.
          </p>
          <p className={styles.descriptionPart}>
            S&apos;inspirant de la démarche artistique qui repose sur le doute
            et la volonté de partager largement sa sensibilité, le Gai Savoir
            définit la singularité comme l&apos;équilibre -plus ou moins
            précaire- que chacun trouve avec la norme (professionnelle, sociale,
            de genre, etc…) d&apos;une époque. C&apos;est dans ce frottement
            qu&apos;émerge la singularité.
          </p>
          <p className={styles.descriptionPart}>
            Le désaccord est pensé comme une rencontre radicale et nécessaire de
            l&apos;Autre, le respect comme son principe élémentaire.
            L&apos;objectif est de montrer qu&apos;il ne mène pas forcément à la
            rupture.
          </p>
          <p className={styles.descriptionPart}>
            Enfin, le Gai Savoir assume une programmation évènementielle et
            audiovisuelle qui divertisse: le contenu produit se veut ludique,
            pour susciter éveil et curiosité.
          </p>
          <p className={styles.descriptionPart}>
            Qu&apos;il s&apos;agisse d&apos;idées, de productions artistiques ou
            d&apos;initiatives citoyennes, le Gai Savoir a pour ambition de
            sortir de la tradition du salon et d&apos;associer exigence de la
            pensée, sincérité de l&apos;émotion et légèreté de l&apos;amusement.
          </p>
        </div>

        <p className={styles.highlights}>
          Le Gai Savoir est le pari d&apos;une exploration radicale, celle de la
          rencontre de l&apos;autre. La promesse d&apos;un espace de
          retrouvailles intergénérationnel pour accueillir la nostalgie du monde
          d&apos;avant et se saisir collectivement de l&apos;incertitude du
          monde d&apos;après.
        </p>
      </div>

      <h2 className={styles.teamTitle}>L&apos;ÉQUIPE DU GAI SAVOIR</h2>

      <div className={styles.team}>
        <div className={styles.contributor1Container}>
          <Contributor
            firstname="Ariane"
            lastname="Ahmadi"
            description="Fondatrice de la plateforme du Gai Savoir, elle est conseillère en stratégie de communication, d'image et de marque pour le secteur politique, corporate, institutionnel et culturel. Elle a fondé le Gai Savoir pour sortir le débat d'idées de la tradition du salon. Elle s'est spécialisée sur la fabrique de l'authenticité, les liens entre pop'culture et storytelling collectif ainsi que la conception d'un parler juste."
            imageUrl="https://res.cloudinary.com/dhj1ij2pz/image/upload/v1686078456/ariane_ahmadi_photo_portrait_y0ed3h.png"
            className={styles.contributor}
          />
        </div>

        <div className={styles.otherMembers}>
          <Contributor
            firstname="Marine"
            lastname="Brun-Franzetti"
            description="Elle a écrit et réalisé plusieurs films documentaires et de courts-métrages. Actuellement doctorante en cinéma documentaire à l'université d'Aix-Marseille, elle partage également son savoir en enseignant dans diverses institutions académiques parisiennes. Elle est secrétaire générale de l'association et cheffe du pôle audiovisuel."
            imageUrl="https://res.cloudinary.com/dhj1ij2pz/image/upload/v1686078473/marine_brun_franzetti_photo_portrait_fzkwfi.jpg"
            className={styles.contributor}
          />
          <div className={styles.contributorContainer}>
            <Contributor
              firstname="Florence"
              lastname="Mouget"
              description="Artiste-autrice, illustratrice et motion designer."
              imageUrl="https://res.cloudinary.com/dhj1ij2pz/image/upload/v1686078473/florence_mouget_photo_portrait_tdw9a1.jpg"
              className={styles.contributor}
            />
          </div>
          <div className={styles.contributorContainer}>
            <Contributor
              firstname="Catherine"
              lastname="Ruggeri"
              description="Haut fonctionnaire au Ministère de la Culture, elle organise et évalue la mise en place de l'action publique culturelle. Depuis une dizaine d'années elle s'est spécialisée dans le secteur des industries culturelles et créatives, en particulier le secteur des musiques actuelles. Elle est trésorière de l'association."
              className={styles.contributor}
            />
          </div>
          <div className={styles.contributorContainer}>
            <Contributor
              firstname="Raphaël"
              lastname="Giagnorio"
              description="Développeur informatique et compositeur, il est en charge du pôle numérique du Gai Savoir."
              imageUrl="https://res.cloudinary.com/dhj1ij2pz/image/upload/v1686078474/raphael_giagnorio_portrait_ysd5lz.jpg"
              className={styles.contributor}
            />
          </div>
        </div>
      </div>

      <Image src={logo} width={200} className={styles.logo} alt="" />
    </div>
  );
};

export default Apropos;
