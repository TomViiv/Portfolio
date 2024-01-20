import { Project } from '../class/project';

export const myProjects: Project[] = [
  new Project(
    'Bureau de rêves',
    'Juin 2023',
    "Suite à un MOOC Blender effectué en Mars 2023, j'ai modéliser mon \"Bureau de rêve\" en 3D sur Blender. L'objectif suivant est de l'intégrer à ce portfolio à l'aide de la librarie ThreeJs.",
    [
      { name: 'Blender', logoUrl: '' },
    ],
    [
      {type: "img", name:"Bureau de rêve", url: "/assets/Projects/dream_desk.png"}
    ]
  ),
  new Project('KUHN AURA Live', "2021 - Aujourd'hui", "Actuellement, je suis en alternance en tant qu'ingénieur Full-Stack au sein de l'équipe robotique de l'entreprise KUHN Audureau. J'ai en charge de la réalisation de l'application KUHN AURA Live. Je réalise les maquettes de vues et je les implémente. Je m'occupe aussi de la partie BackEnd. KUHN AURA Live est une application Angular destinée à être l'Interface Homme Machine principale de l'innovant robot KUHN AURA.",
    [
      { name: 'Angular (HTML, CSS, JS, TS)', logoUrl: '' },
      { name: '.NET (C#)', logoUrl: '' },
    ],
    [
      {
        type: 'img', name:'Menu principal - Aperçu', url: '/assets/Projects/AURA_Live/apercu.png'
      },
      {
        type: 'img', name:'Missions réalisées', url: '/assets/Projects/AURA_Live/past-missions.jpg'
      },
      {
        type: 'img', name:'Missions planifiées', url: '/assets/Projects/AURA_Live/scheduled-missions.jpg'
      },
      {
        type: 'img', name:'Mission en cours', url: '/assets/Projects/AURA_Live/pesee_mission_running.png'
      },
      {
        type: 'img', name:'Rations', url: '/assets/Projects/AURA_Live/rations.jpg'
      },
    ]
  ),
  new Project(
    'Concept Jeu Recyclage "Loop"',
    'Novembre 2022',
    "Dans le cadre d'un Hackathon organisé à l'école, nous avions 2 jours pour imaginer un jeu pour sensibiliser à une thématique autour du développement durable. Avec mon équipe nous avons choisi de faire un jeu autour du recyclage des équipements numériques.",
    [],
    [
      {
        type: 'img', name:'Etude recyclage en Mayenne', url: '/assets/Projects/RSE/6_carte_mayenne_recyclage_a3.png'
      },
      {
        type: 'img', name:'Jeu "Loop"', url: '/assets/Projects/RSE/6_jeu_loop.png'
      },
      {
        type: 'img', name:'Maquette "Loop"', url: '/assets/Projects/RSE/jeu RSE.png'
      },
    ]
  ),
  new Project(
    'Bot Discord Marvel Snap',
    'Août 2022',
    "Je suis un grand fan de l'univers Marvel et joueur de Marvel Snap, un jeu de cartes mobile. Etant présent sur un discord communautaire, j'ai réalisé un bot permettant aux joueurs novices de demander des informations sur des cartes, sur le système de rareté des cartes, et plus encore...",
    [
      { name: 'Discord', logoUrl: '' },
      { name: 'BackEnd : node.js', logoUrl: '' },
      { name: 'Base de Données : PostgreSQL', logoUrl: '' },
      { name: 'Docker', logoUrl: '' },
    ],
    [
      {
        type: 'img', name:'Commande !!card', url: '/assets/Projects/DiscordBot/card.png'
      },
      {
        type: 'img', name:'Commande !!rarity', url: '/assets/Projects/DiscordBot/rarity.png'
      },
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
        url: '/assets/Projects/Arduino/digital-lock-face.jpg',
      },
      {
        type: 'img',
        name: 'Intérieur - Arduino',
        url: '/assets/Projects/Arduino/digital-lock-inside.jpg',
      },
      {
        type: 'img',
        name: 'Intérieur - Batterie',
        url: '/assets/Projects/Arduino/digital-lock-battery.jpg',
      },
      {
        type: 'video',
        name: 'Premiers tests',
        url: '/assets/Projects/Arduino/digital-lock-test.mp4',
      },
      {
        type: 'video',
        name: 'Rendu final',
        url: '/assets/Projects/Arduino/digital-lock.mp4',
      },
    ]
  ),
];
