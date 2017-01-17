import { Injectable } from '@angular/core';

import { Serie } from "./series";

var books = [
  {
    "id": "cinqDenier",
    "title": "Les 5 Derniers Dragons",
    "descriptionTitle": "Une quête fantastique!",
    "description": "Lorsque son père O’Neil Dagibold lui révélera l’existence secrète d’un dragon, une créature qu’on croyait inventée pour agrémenter les conversations, Andrick décidera de partir seul à la recherche d’Inféra, le dragon des légendes perdues. Lui, sa soeur jumelle Nina et toute la communauté des enchanteurs connaîtront des tourments et des évènements déchirants tout à fait inattendus.",
    "imageUrl": "assets/images/cinq-dernier/banner.jpg",
    "icons": [
      {"src": "assets/icons/adventure.svg", "caption": "Adventure"},
      {"src": "assets/icons/age.svg", "caption": "Age 10+"},
      {"src":"assets/icons/magic.svg", "caption": "Magie"}
    ],
    "color": "#681010",
    "colorBlock": "#1c293d",
    "books": [
      {
        "id": 1,
        "title": "Les Cinq Dernier Dragon: Tome 1",
        "description": "Lorsque son père O’Neil Dagibold lui révélera l’existence secrète d’un dragon, une créature qu’on croyait inventée pour agrémenter les conversations, Andrick décidera de partir seul à la recherche d’Inféra, le dragon des légendes perdues. Lui, sa soeur jumelle Nina et toute la communauté des enchanteurs connaîtront des tourments et des évènements déchirants tout à fait inattendus.",
        "imageUrl": "assets/images/cinq-dernier/dragon1.jpg"
      },
      {
        "id": 2,
        "title": "Les Cinq Dernier Dragon: Tome 2",
        "description": "Lorsque son père O’Neil Dagibold lui révélera l’existence secrète d’un dragon, une créature qu’on croyait inventée pour agrémenter les conversations, Andrick décidera de partir seul à la recherche d’Inféra, le dragon des légendes perdues. Lui, sa soeur jumelle Nina et toute la communauté des enchanteurs connaîtront des tourments et des évènements déchirants tout à fait inattendus.",
        "imageUrl": "assets/images/cinq-dernier/dragon2.jpg"
      },
      {
        "id": 3,
        "title": "Les Cinq Dernier Dragon: Tome 3",
        "description": "Lorsque son père O’Neil Dagibold lui révélera l’existence secrète d’un dragon, une créature qu’on croyait inventée pour agrémenter les conversations, Andrick décidera de partir seul à la recherche d’Inféra, le dragon des légendes perdues. Lui, sa soeur jumelle Nina et toute la communauté des enchanteurs connaîtront des tourments et des évènements déchirants tout à fait inattendus.",
        "imageUrl": "assets/images/cinq-dernier/dragon3.jpg"
      },
      {
        "id": 4,
        "title": "Les Cinq Dernier Dragon: Tome 4",
        "description": "Lorsque son père O’Neil Dagibold lui révélera l’existence secrète d’un dragon, une créature qu’on croyait inventée pour agrémenter les conversations, Andrick décidera de partir seul à la recherche d’Inféra, le dragon des légendes perdues. Lui, sa soeur jumelle Nina et toute la communauté des enchanteurs connaîtront des tourments et des évènements déchirants tout à fait inattendus.",
        "imageUrl": "assets/images/cinq-dernier/dragon4.jpg"
      },
      {
        "id": 5,
        "title": "Les Cinq Dernier Dragon: Tome 1",
        "description": "Lorsque son père O’Neil Dagibold lui révélera l’existence secrète d’un dragon, une créature qu’on croyait inventée pour agrémenter les conversations, Andrick décidera de partir seul à la recherche d’Inféra, le dragon des légendes perdues. Lui, sa soeur jumelle Nina et toute la communauté des enchanteurs connaîtront des tourments et des évènements déchirants tout à fait inattendus.",
        "imageUrl": "assets/images/cinq-dernier/dragon1.jpg"
      },
      {
        "id": 6,
        "title": "Les Cinq Dernier Dragon: Tome 2",
        "description": "Lorsque son père O’Neil Dagibold lui révélera l’existence secrète d’un dragon, une créature qu’on croyait inventée pour agrémenter les conversations, Andrick décidera de partir seul à la recherche d’Inféra, le dragon des légendes perdues. Lui, sa soeur jumelle Nina et toute la communauté des enchanteurs connaîtront des tourments et des évènements déchirants tout à fait inattendus.",
        "imageUrl": "assets/images/cinq-dernier/dragon2.jpg"
      },
      {
        "id": 7,
        "title": "Les Cinq Dernier Dragon: Tome 3",
        "description": "Lorsque son père O’Neil Dagibold lui révélera l’existence secrète d’un dragon, une créature qu’on croyait inventée pour agrémenter les conversations, Andrick décidera de partir seul à la recherche d’Inféra, le dragon des légendes perdues. Lui, sa soeur jumelle Nina et toute la communauté des enchanteurs connaîtront des tourments et des évènements déchirants tout à fait inattendus.",
        "imageUrl": "assets/images/cinq-dernier/dragon3.jpg"
      },
      {
        "id": 8,
        "title": "Les Cinq Dernier Dragon: Tome 4",
        "description": "Lorsque son père O’Neil Dagibold lui révélera l’existence secrète d’un dragon, une créature qu’on croyait inventée pour agrémenter les conversations, Andrick décidera de partir seul à la recherche d’Inféra, le dragon des légendes perdues. Lui, sa soeur jumelle Nina et toute la communauté des enchanteurs connaîtront des tourments et des évènements déchirants tout à fait inattendus.",
        "imageUrl": "assets/images/cinq-dernier/dragon4.jpg"
      }
    ]
  },
  {
    "id": "ordreDragon",
    "title": "Ordre Des 5 Dragons",
    "descriptionTitle": "Un Drame, Une Adventure!",
    "description": "Le porteur du pentacle se réveilla entouré de sirènes et dans une grotte. Il ne se souvint de rien, ni de son propre nom ni de ses pouvoirs. Surmontant sa solitude et cet épouvantable problème, il apprendra qu’un être exécrable du nom d’Hybris a la main mise sur tous les êtres vivants d’Abraxas, y compris sur les 5 dragons élémentaires. Sera-t-il en mesure de retrouver ses pouvoirs magiques, de sauver ses amis, de libérer les dragons et de vaincre Hybris ?",
    "imageUrl": "assets/images/cinq-dernier/banner.jpg",
    "icons": [
      {"src": "assets/icons/adventure.svg", "caption": "Adventure"},
      {"src": "assets/icons/age.svg", "caption": "Age 10+"},
      {"src":"assets/icons/magic.svg", "caption": "Magie"}
    ],
    "color": "#2c0c5b",
    "colorBlock": "#093e60",
    "books": [
      {
        "id": 1,
        "title": "Ordre Des 5 Dragons: Tome 1",
        "description": "Le porteur du pentacle se réveilla entouré de sirènes et dans une grotte. Il ne se souvint de rien, ni de son propre nom ni de ses pouvoirs. Surmontant sa solitude et cet épouvantable problème, il apprendra qu’un être exécrable du nom d’Hybris a la main mise sur tous les êtres vivants d’Abraxas, y compris sur les 5 dragons élémentaires. Sera-t-il en mesure de retrouver ses pouvoirs magiques, de sauver ses amis, de libérer les dragons et de vaincre Hybris ?",
        "imageUrl": "assets/images/odragons/odragon1.jpg"
      },
      {
        "id": 2,
        "title": "Ordre Des 5 Dragons: Tome 2",
        "description": "Plus que jamais, l’avenir de la troupe des Chevaliers du Pentacle et des dragons repose sur les épaules d’Andrick Dagibold, un jeune mage de 15 ans, porteur d’un puissant talisman, un pentacle. Hélas ! À Abraxas, en plus de vivre les contrecoups d’une colère insensée de Poséidon, une personne malicieuse fera tout en son pouvoir pour s’emparer de ce précieux objet tant convoité.",
        "imageUrl": "assets/images/odragons/odragon2.jpg"
      },
      {
        "id": 3,
        "title": "Ordre Des 5 Dragons: Tome 3",
        "description": "Grâce à un directorium, Érika atterrit non sans mal et sans de graves blessures à Abraxas où elle fait la connaissance d’Andrick, le porteur du pentacle. Rapidement, Andrick et Érika développent des liens amoureux très forts. Elle l’invite à visiter Magnésia, une planète d’un autre univers où la magie est permise. Devrait-il vraiment la suivre dans ce monde fantastique ? Est-elle une bonne ou une mauvaise personne qui convoite le pentacle comme d’autres personnes malveillantes ? Un choix difficile s’offre à lui. Sa mission ou son amour pour une étrangère aux yeux pourpres",
        "imageUrl": "assets/images/odragons/odragon3.jpg"
      }
    ]
  },
  {
    "id": "salsa",
    "title": "Sortilèges, salsa et compagnie",
    "descriptionTitle": "Un Drame, Une Adventure!",
    "description": "Le porteur du pentacle se réveilla entouré de sirènes et dans une grotte. Il ne se souvint de rien, ni de son propre nom ni de ses pouvoirs. Surmontant sa solitude et cet épouvantable problème, il apprendra qu’un être exécrable du nom d’Hybris a la main mise sur tous les êtres vivants d’Abraxas, y compris sur les 5 dragons élémentaires. Sera-t-il en mesure de retrouver ses pouvoirs magiques, de sauver ses amis, de libérer les dragons et de vaincre Hybris ?",
    "imageUrl": "assets/images/cinq-dernier/banner.jpg",
    "icons": [
      {"src": "assets/icons/adventure.svg", "caption": "Adventure"},
      {"src": "assets/icons/age.svg", "caption": "Age 10+"},
      {"src":"assets/icons/magic.svg", "caption": "Magie"}
    ],
    "color": "#84024e",
    "colorBlock": "#137375",
    "books": [
      {
        "id": 1,
        "title": "Sortilèges, salsa et compagnie: Tome 1",
        "description": "Cinq filles de la rue des Ormes décident de former un club pour se désennuyer, le club Salsa, dont le but est de combattre l'ennemi: cinq gars du voisinage. Un événement viendra chambouler leurs plans et des phénomènes bizarres feront leur apparition. Mais quel est donc cet événement qui frappera la petite municipalité de Saint-Parlinpin? ",
        "imageUrl": "assets/images/salsa/sort1.jpg"
      },
      {
        "id": 2,
        "title": "Sortilèges, salsa et compagnie: Tome 2",
        "description": "Bien malgré eux, Saléna et Simon provoqueront d'autres phénomènes inexpliqués qui viendront mettre une distance entre le club Salsa et leurs ex-amis. Les quatre amis parviendront- ils à se consacrer à leur mission, c'est-à-dire sauver Adeline?",
        "imageUrl": "assets/images/salsa/sort2.jpg"
      },
      {
        "id": 3,
        "title": "Sortilèges, salsa et compagnie: Tome 3",
        "description": "La pauvre Samara constate avec effroi qu'elle a perdu l'habileté de redessiner la carte magique détruite deux fois. Sans cette carte reproduite parfaitement, Saléna ne peut rapporter la pomme d'or pour sauver la vie d'Adeline. De plus, une révélation leur sera transmise par un étrange androïde. Quelle est donc cette révélation?",
        "imageUrl": "assets/images/salsa/sort3.jpg"
      },
      {
        "id": 4,
        "title": "Sortilèges, salsa et compagnie: Tome 4",
        "description": "À Saint-Parlinpin, tout est sous haute surveillance. Mme Bellerive surveille ses piments ; monsieur Bellerive, ses sous ; madame Sirois, Saléna et Samara ; le maire, tous les phénomènes paranormaux de sa ville ; et Charline, son poids. Mais le plus surprenant viendra d'ailleurs, une nouvelle qui chamboulera le quartier et les jumelles Bellerive.",
        "imageUrl": "assets/images/salsa/sort4.jpg"
      },
      {
        "id": 5,
        "title": "Sortilèges, salsa et compagnie: Tome 5",
        "description": "Pour le club Salsa, les choses se corsent. En raison d'un secret dévoilé par Simon, les jumelles doivent récupérer au plus vite une carte laissée à la grotte située dans le parc décrété dangereux et interdit par le maire de Saint-Parlinpin. Le club Salsa est sur le point de réaliser leur but lorsqu'une sauce étonnante viendra compliquer leur plan de match.",
        "imageUrl": "assets/images/salsa/sort5.jpg"
      },
      {
        "id": 6,
        "title": "Sortilèges, salsa et compagnie: Tome 6",
        "description": "À son arrivée à la vallée des sorcières, la troupe peine à trouver l’île. Ce sera Saléna qui aboutira seule sur cette île. Elle rencontrera le capitaine Cortés et son équipage. Rapidement, le voyage prendra une tournure sinistre. Toutefois, elle connaîtra enfin sa véritable mission à la toute fin de son périple. ",
        "imageUrl": "assets/images/salsa/sort6.jpg"
      }
    ]
  }
];

@Injectable()
export class BooksService {

  getSeries():Serie[] {
    return books;
  }
}
