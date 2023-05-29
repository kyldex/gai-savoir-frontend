import type { AudiovisualData } from './audiovisualType';

const audiovisualData: AudiovisualData = [
  {
    id: '2',
    attributes: {
      title: "L'Exode",
      excerpt: 'Réalisé par Quentin Jagorel',
      published: '2023-04-25',
      content: [
        "Dans sa vie urbaines aux apparences souriantes, Myriam pousse des cris de solitude. Un jour elle rencontre Andrea qui la libère de ses chaînes. C'est dans l'exil qu'ils vivront leur amour.",
        "Né en 1991, Quentin Jagorel a réalisé plusieurs fictions et documentaires. En 2013 et 2014, il réalise successivement deux moyens-métrages de fictions, 'Kolia' et 'L'Excode'. En 2015, il signe El Paisaje de los sentidos, essai visuel sur la société chilienne. En 2017, il dresse le portrait des habitants du plateau ardéchois dans Les Pagels. En 2020, il réalise Rue basse, rue haute, un documentaire sur les habitants de la cité minière de Drocourt dans le Pas-de-Calais. Il reçoit pour ces deux documentaires le patronage de la commission nationale française pour l'Unesco.  En 2020, il co-réalise avec Benjamin Rassat une série d'entretiens filmés avec l'historien Marc Ferro (Les Images de Marc). En 2022, il signe le documentaire 'Commue une personne', diffusé en février 2023 sur KTO TV."
      ],
      videoUrl: 'https://www.youtube.com/embed/4M47DQf_VQI',
      card_image: {
        data: {
          attributes: {
            url: 'https://res.cloudinary.com/dhj1ij2pz/image/upload/v1685114591/video-quentin_rl22an.png'
          }
        }
      },
      slug: 'exode-quetin-jagorel-video'
    }
  },
  {
    id: '1',
    attributes: {
      title: "L'Amour est-il devenu une valeur ringarde?",
      excerpt:
        "Ils ont de 17 à 73 ans et ont répondu à nos questions sur l'amour.",
      published: '2023-04-20',
      content: [
        "Ils ont de 17 à 73 ans et ont répondu à nos questions sur l'amour : ce qu'ils en savent, ce qu'ils en attendent et comment ils l'expérimentent.",
        'Film réalisé par Marine Brun-Fanzetti.',
        "Merci aux participants Pierre-Antoine Albertini, Luna Albertini, Stefan M'Boungou, Lou Paquet, Daniel Raichvarg."
      ],
      videoUrl: 'https://www.youtube.com/embed/J9eDmywu17M',
      card_image: {
        data: {
          attributes: {
            url: 'https://res.cloudinary.com/dhj1ij2pz/image/upload/v1685112795/video-amour-est-il-valeur-ringarde_e2em2e.png'
          }
        }
      },
      slug: 'amour-est-il-valeur-ringarde-video'
    }
  }
];

export default audiovisualData;
