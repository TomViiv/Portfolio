import { Project } from '../class/project';

export const myProjects: Project[] = [
  new Project(
    'Bureau de rêve en 3D',
    'en cours de travail...',
    "En mars 2023, j'ai effectué un MOOC pour apprendre les bases de Blender. J'ai mis à profit ces nouvelles compétences en créant mon bureau de rêve en 3D. Mon objectif est maintenant d'intégrer ce bureau dans mon portfolio. Pour cela, j'ai commencé à m'interresser à la librarie ThreeJS et à son implémentation avec Angular. Ce projet est actuellement en cours de développement.",
    [
      { name: 'Blender', logoUrl: '' },
      { name: 'ThreeJS', logoUrl: '' },
    ]
  ),
  new Project('AURA Live', '2021-2024', 'description', [
    { name: 'FrontEnd : Angular', logoUrl: '' },
    { name: 'BackEnd : .NET', logoUrl: '' },
  ]),
  new Project(
    'Concept Jeu Recyclage',
    'novembre 2022',
    "Dans le cadre d'un Hackathon organisé à l'école, nous avions 2 jours pour imaginer un jeu pour sensibiliser à une thématique autour du développement durable. Avec mon équipe nous avons choisi de faire un jeu autour du recyclage des équipements numériques.",
    []
  ),
  new Project(
    'Bot Discord Marvel Snap',
    'août 2022',
    "Je suis un grand fan de l'univers Marvel et joueur de Marvel Snap, un jeu de cartes mobile. Etant présent sur un discord communautaire, j'ai réalisé un bot permettant aux joueurs novices de demander des informations sur des cartes, sur le système de rareté des cartes, et plus encore...",
    [
      { name: 'Discord', logoUrl: '' },
      { name: 'BackEnd : node.js', logoUrl: '' },
      { name: 'Base de Données : PostgreSQL', logoUrl: '' },
      { name: 'docker', logoUrl: '' },
    ]
  ),
  new Project(
    'Code sécurisé',
    '2021',
    "Dans le cadre de mon job d'été en temps qu'animateur BAFA à l'Espace Jeunes de Saint-Mathurin, j'ai conçu un escape game. Pour une des épreuves de cet escape game, je me suis mis au défi de concevoir un cadenas à code numérique. Si on tappe le bon code, celui-ci nous donne un indice.",
    [
      { name: 'Arduino', logoUrl: '' },
      { name: 'Logiciel 3D : Autodesk Fusion 360', logoUrl: '' },
    ],
    [
      {
        type: 'img',
        name: 'Face avant',
        url: '/assets/Projects/Arduino/secure-lock-face.jpg',
      },
      {
        type: 'img',
        name: 'Intérieur - Arduino',
        url: '/assets/Projects/Arduino/secure-lock-inside.jpg',
      },
      {
        type: 'img',
        name: 'Intérieur - Batterie',
        url: '/assets/Projects/Arduino/secure-lock-battery.jpg',
      },
      {
        type: 'video',
        name: 'Premiers tests',
        url: '/assets/Projects/Arduino/secure-lock-test.mp4',
      },
    ]
  ),
];
