import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from './index.module.scss';

import Intro from '../components/home/Intro';

import useHasMounted from '../utils/hooks/useHasMounted';

const Home: NextPage = () => {
  const hasMounted = useHasMounted();

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

      {/* TODO: Client only. Custom layout shift ? + pas de h1 dans le html initial */}
      {hasMounted ? <Intro /> : null }

      <div className={styles.avantPropos}>
        <h2>AVANT-PROPOS</h2>
        <div className={styles.description}>
          <p className={styles.descriptionPart}>
            Le Gai Savoir est une plateforme de contenus intellectuel,
            artistique et citoyen visant à se libérer de la logique de
            segmentation propres à la politique et aux industries culturelles et
            créatives. La plateforme du Gai Savoir réunit des productions de
            personnalités de notoriétés diverses (faible à forte), de profils
            différents dans l&apos;espoir de croiser les publics et échapper aux
            bulles des réseaux sociaux.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
            consequat lacus. Nulla facilisi. Nulla fermentum rutrum interdum.
            Proin ante tellus, eleifend in nunc ut, sagittis porttitor diam.
            Fusce ac urna eget leo hendrerit vehicula at at leo. Donec facilisis
            neque quis tincidunt condimentum. Duis vitae sem ornare nulla
            faucibus pulvinar. Curabitur et aliquam ipsum. Duis velit turpis,
            ullamcorper sit amet sem ac, pharetra mollis est. Nulla facilisi.
          </p>

          <p className={styles.descriptionPart}>
            Integer hendrerit ligula a augue rutrum, id convallis tortor
            ullamcorper. Sed ultrices et tortor non convallis. Ut ac lectus quis
            purus pulvinar mattis at ut quam. Ut semper tincidunt facilisis.
            Integer vestibulum ligula mi. Donec lacus diam, imperdiet ut urna
            vitae, ullamcorper egestas neque. Quisque scelerisque sollicitudin
            molestie. Donec iaculis egestas nisi, et gravida felis lacinia sed.
            Fusce interdum molestie vulputate. Quisque id risus et odio pharetra
            pharetra. Nullam ut dui ex. Etiam malesuada est id libero sagittis,
            ut pharetra ante elementum. Integer vitae cursus tellus. Aliquam non
            gravida velit, ac porta ipsum. Nulla dignissim rutrum ipsum, ac
            convallis nulla aliquet sed. Vestibulum et faucibus nisl.
          </p>

          <p className={styles.descriptionPart}>
            Nam eget risus efficitur, fringilla erat nec, vestibulum dolor. Cras
            rutrum risus sit amet vulputate gravida. Donec ut tincidunt massa,
            at tempor lacus. Etiam condimentum porttitor odio ut semper. Proin
            eleifend turpis ac purus pellentesque condimentum. Donec tincidunt
            dui condimentum tellus malesuada viverra. Maecenas id magna vel
            tortor sagittis aliquam nec vehicula magna. Vestibulum scelerisque
            bibendum ipsum, condimentum interdum nisi consequat non. Quisque
            malesuada sapien urna, quis blandit justo tristique nec. Maecenas
            quam metus, pharetra a efficitur ut, euismod ac ligula.
          </p>

          <p className={styles.descriptionPart}>
            Maecenas felis elit, cursus sed aliquam et, hendrerit at libero.
            Praesent at sodales ligula, non malesuada orci. Morbi efficitur odio
            quis mauris aliquet efficitur. Praesent auctor auctor commodo.
            Mauris pretium dolor vitae rutrum accumsan. Donec luctus id metus a
            aliquam. Etiam id ornare magna. Suspendisse id ullamcorper est.
            Donec est nisl, feugiat eu ullamcorper vel, pellentesque tincidunt
            ligula. Vestibulum bibendum purus et felis convallis, sit amet
            euismod turpis ornare. Vivamus in dui feugiat, pellentesque nibh
            eget, blandit dui.
          </p>

          <p className={styles.descriptionPart}>
            Maecenas semper, dolor et fringilla aliquet, leo metus fermentum
            justo, sed varius eros diam euismod lacus. Nam bibendum, tellus ac
            mattis blandit, urna urna faucibus purus, in fringilla nisi nisl nec
            tortor. Aliquam faucibus erat turpis, vel blandit quam ultrices ut.
            Integer condimentum bibendum erat. Duis vitae aliquet sapien. Fusce
            vitae velit dolor. Maecenas quis pulvinar leo. Mauris tincidunt id
            ligula eget porta. Nulla congue iaculis imperdiet. Aliquam ante
            erat, hendrerit ut dignissim vitae, pretium non lectus. Aenean magna
            ex, commodo non ante id, condimentum posuere leo. Phasellus ac purus
            in eros ullamcorper tincidunt. Phasellus quis arcu malesuada,
            maximus tortor non, placerat orci. Maecenas et nisl vulputate,
            laoreet dolor quis, pulvinar sapien. Morbi eu ipsum accumsan,
            tincidunt ex eget, dignissim nulla. Mauris et felis leo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
