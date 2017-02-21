import {Injectable} from '@angular/core';

import {Serie} from "./series";

var books = [
  {
    "id": "cinqDenier",
    "title": "Les 5 derniers dragons",
    "descriptionTitle": "Une quête fantastique!",
    "description": "Lorsque son père O’Neil Dagibold lui révélera l’existence secrète d’un dragon, une créature qu’on croyait inventée pour agrémenter les conversations, Andrick décidera de partir seul à la recherche d’Inféra, le dragon des légendes perdues. Lui, sa soeur jumelle Nina et toute la communauté des enchanteurs connaîtront des tourments et des évènements déchirants tout à fait inattendus.",
    "imageUrl": "assets/images/cinq-dernier/banner.jpg",
    "icons": [
      {"src": "assets/icons/adventure.svg", "caption": "Aventure"},
      {"src": "assets/icons/age.svg", "caption": "Age 10+"},
      {"src": "assets/icons/magic.svg", "caption": "Magie"}
    ],
    "color": "#681010",
    "colorBlock": "#1c293d",
    "books": [
      {
        "id": 1,
        "title": "Tome 1 L’enlèvement",
        "description": "Lorsque son père O’Neil Dagibold lui révélera l’existence secrète d’un dragon, une créature qu’on croyait inventée pour agrémenter les conversations, Andrick décidera de partir seul à la recherche d’Inféra, le dragon des légendes perdues. Lui, sa soeur jumelle Nina et toute la communauté des enchanteurs connaîtront des tourments et des évènements déchirants tout à fait inattendus.",
        "imageUrl": "assets/images/cinq-dernier/dragon1.jpg"
      },
      {
        "id": 2,
        "title": "Tome 2 L’épreuve",
        "description": "Dans le silence d’une nuit étoilée, autour d’un feu, tous les yeux étaient rivés sur elle, Inféra frissonna d’effroi. Elle devrait quitter son antre et partir avec les jumeaux Andrick et Nina à la recherche des quatre autres porteurs de dragon. Bien des péripéties attendent nos héros ; les vies d’Inféra et d’Améranda dépendront de la réussite de l’épreuve…",
        "imageUrl": "assets/images/cinq-dernier/dragon2.jpg"
      },
      {
        "id": 3,
        "title": "Tome 3 La Terre des Elfes",
        "description": "L’extraordinaire périple des chevaliers du Dragon rouge se poursuit. À leur arrivée à la Terre des Elfes, Inféra rencontre Adora, une porteuse de dragon comme elle. Contrairement à elle-même, qui fut gardée loin de tout regard, celle-ci était adorée et aimée de son peuple. Elles se lieront d’amitié et éprouveront une inquiétude commune qu’elles ne révéleront à personne. À vous de découvrir ce terrible secret.",
        "imageUrl": "assets/images/cinq-dernier/dragon3.jpg"
      },
      {
        "id": 4,
        "title": "Tome 4 Le diamant de lune",
        "description": "Leur quête pour retrouver le troisième dragon débutait sur une bien mauvaise note. Ils découvriront que ce n’était hélas! qu’une petite mésaventure parmi tant d’autres. Ce peuple habitué à bien des souffrances et des privations leur réserve une rencontre inattendue et une cascade d’événements surprenants se succédera. ",
        "imageUrl": "assets/images/cinq-dernier/dragon4.jpg"
      },
      {
        "id": 5,
        "title": "Tome 5 Les oubliés",
        "description": "Cent cinquante ans plus tard, les chevaliers du Dragon rouge sont à la recherche du quatrième porteur de dragon. Par malheur, des personnages terrifiants dévorant des humains et des Elfes, ainsi que la disparition d’un mystérieux objet mettront en péril leur mission ultime, la libération des cinq derniers dragons.",
        "imageUrl": "assets/images/cinq-dernier/dragon5.jpg"
      },
      {
        "id": 6,
        "title": "Tome 6 La cité de glace",
        "description": "Les chevaliers du Dragon rouge poursuivent leur quête du dernier dragon, le dragon d’éther. Par malheur, ils ne sont pas seuls à le rechercher. Arthur de La Chevrière, une personne aux intentions maléfiques atteindra avant eux la Cité de Glace en quête du Précieux Sang du dragon d’éther. ",
        "imageUrl": "assets/images/cinq-dernier/dragon6.jpg"
      },
      {
        "id": 7,
        "title": "Tome 7 Un vent malsain",
        "description": "Les porteurs de dragon sont à la limite de leur temps et un rien semble les contrarier. De multiples surprises et rebondissements s’annoncent à l’horizon avec Launa et ses dragons ainsi qu’avec Spino, ce fougueux dragon rouge aux intrigues amoureuses compliquées. Ce dernier donnera du fil à retordre à Andrick et à sa porteuse.",
        "imageUrl": "assets/images/cinq-dernier/dragon7.jpg"
      },
      {
        "id": 8,
        "title": "Tome 8 Le destin de Rajni",
        "description": "Jamais les porteurs de dragons n’auront été si près d’acquérir cette précieuse liberté. Pourtant, une hantise obsède Inféra, l’image de Waldo possédé par le diable. Au lieu de le convoiter, Belzébuth prendra possession d’un dragon, mais la bête est loin d’être docile. Réussira-t-il à la contrôler ? Vous le saurez en suivant les nouvelles péripéties de la troupe sur le chemin du retour.",
        "imageUrl": "assets/images/cinq-dernier/dragon8.jpg"
      }
      ,
      {
        "id": 9,
        "title": "Tome 9 Le sacrifice",
        "description": "Bien des surprises attendent les chevaliers des cinq derniers dragons de retour au pays des Elfes, dont une surprise de taille, celle d’une légende. Quelle est donc cette légende? Et surtout, de quel sacrifice est-il question ?",
        "imageUrl": "assets/images/cinq-dernier/dragon9.jpg"
      },
      {
        "id": 10,
        "title": "Tome 10 Le soleil noir",
        "description": "À la Terre des Cinq Peuples se déroulera une bataille singulière sous un soleil noir. La déesse Freyja, qui y règne et qui est vénérée par les Mjöllnirs, engagera une lutte sans merci pour conserver son titre de déesse, qui lui appartient. Comme un malheur n’arrive jamais seul, Andrick et les chevaliers du Dragon rouge devenu les chevaliers du pentacle auront encore des difficultés à surmonter lorsque Adora, à la recherche de son frère Galdor, dévoilera un secret qui contrariera l’humeur de la troupe.",
        "imageUrl": "assets/images/cinq-dernier/dragon10.jpg"
      },
      {
        "id": 11,
        "title": "Tome 11 Dracontia",
        "description": "Malphas n’est plus que l’ombre de lui-même, cherchant l’apaisement et un second souffle. Lorsqu’il entend dire qu’Andrick, le chef des chevaliers du pentacle, recherche une pierre noire connue sous le nom de Dracontia ; cette pierre lui permettra possiblement de réintégrer son corps délaissé depuis plus d’un siècle dans une crypte. Alors, une lutte à deux s’engagera afin d’acquérir cette pierre. Qui des deux mettra la main sur la Dracontia, cette pierre gardée secrète et bien camouflée à Dorado?",
        "imageUrl": "assets/images/cinq-dernier/dragon11.jpg"
      },
      {
        "id": 12,
        "title": "Tome 12 L’oppression",
        "description": "Découvrez l'intrigante conclusion de la série des 5 derniers dragons. Olibert de la Source désire se venger d'un acte perpétré 150 ans plus tôt. Lorsqu'il acquiert une chevalière aux propriétés mystérieuses, sa vengeance devient démesurée. Il cherche par tous les moyens à détruire le dernier symbole identitaire des enchanteurs à Dorado. Réussira-t-il à mettre son plan à exécution ? ",
        "imageUrl": "assets/images/cinq-dernier/dragon12.jpg"
      }
    ]
  },
  {
    "id": "ordreDragon",
    "title": "L’ordre des 5 dragons",
    "descriptionTitle": "L’aventure se poursuit !",
    "description": "Andrick ne supporte pas que des Rongirs, des créatures venues d’ailleurs, attaquent les dragons de façon continuelle. Cette menace perpétuelle force Andrick et les chevaliers de Pentacle à se rendre à Abraxas afin de les neutraliser. Bien des aventures en perspective !",
    "imageUrl": "assets/images/odragons/odragonban.jpg",
    "icons": [
      {"src": "assets/icons/adventure.svg", "caption": "Aventure"},
      {"src": "assets/icons/age.svg", "caption": "Age 10+"},
      {"src": "assets/icons/magic.svg", "caption": "Magie"}
    ],
    "color": "#2c0c5b",
    "colorBlock": "#093e60",
    "books": [
      {
        "id": 1,
        "title": "Tome 1 Le mystère d’Abraxas",
        "description": "Le porteur du pentacle se réveilla entouré de sirènes et dans une grotte. Il ne se souvint de rien, ni de son propre nom ni de ses pouvoirs. Surmontant sa solitude et cet épouvantable problème, il apprendra qu’un être exécrable du nom d’Hybris a la main mise sur tous les êtres vivants d’Abraxas, y compris sur les 5 dragons élémentaires. Sera-t-il en mesure de retrouver ses pouvoirs magiques, de sauver ses amis, de libérer les dragons et de vaincre Hybris ?",
        "imageUrl": "assets/images/odragons/odragon1.jpg"
      },
      {
        "id": 2,
        "title": "Tome 2 La colère de Poséidon",
        "description": "Plus que jamais, l’avenir de la troupe des Chevaliers du Pentacle et des dragons repose sur les épaules d’Andrick Dagibold, un jeune mage de 15 ans, porteur d’un puissant talisman, un pentacle. Hélas ! À Abraxas, en plus de vivre les contrecoups d’une colère insensée de Poséidon, une personne malicieuse fera tout en son pouvoir pour s’emparer de ce précieux objet tant convoité.",
        "imageUrl": "assets/images/odragons/odragon2.jpg"
      },
      {
        "id": 3,
        "title": "Tome 3 Les yeux pourpres",
        "description": "Grâce à un directorium, Érika atterrit non sans mal et sans de graves blessures à Abraxas où elle fait la connaissance d’Andrick, le porteur du pentacle. Rapidement, Andrick et Érika développent des liens amoureux très forts. Elle l’invite à visiter Magnésia, une planète d’un autre univers où la magie est permise. Devrait-il vraiment la suivre dans ce monde fantastique ? Est-elle une bonne ou une mauvaise personne qui convoite le pentacle comme d’autres personnes malveillantes ? Un choix difficile s’offre à lui. Sa mission ou son amour pour une étrangère aux yeux pourpres.",
        "imageUrl": "assets/images/odragons/odragon3.jpg"
      }
    ]
  },
  {
    "id": "salsa",
    "title": "Sortilèges, salsa et compagnie",
    "descriptionTitle": "Aventure et magie",
    "description": "Les jumelles Saléna et Samara ont plus qu’un tour de magie dans leur sac. Grâce à un événement inattendu, elles acquerront des pouvoirs magiques. Elles apprendront que deux de ses voisins, Simon et Maxime, ont eu aussi des pouvoirs magiques. Une alliance entre eux se formera. De multiples péripéties loufoques se succéderont à un rythme soutenu. Rire garanti.",
    "imageUrl": "assets/images/salsa/bansort.jpg",
    "icons": [
      {"src": "assets/icons/adventure.svg", "caption": "Aventure"},
      {"src": "assets/icons/age9.svg", "caption": "Age 9+"},
      {"src": "assets/icons/magic.svg", "caption": "Magie"}
    ],
    "color": "#84024e",
    "colorBlock": "#137375",
    "books": [
      {
        "id": 1,
        "title": "Tome 1 L’événement",
        "description": "Cinq filles de la rue des Ormes décident de former un club pour se désennuyer, le club Salsa, dont le but est de combattre l'ennemi: cinq gars du voisinage. Un événement viendra chambouler leurs plans et des phénomènes bizarres feront leur apparition. Mais quel est donc cet événement qui frappera la petite municipalité de Saint-Parlinpin?",
        "imageUrl": "assets/images/salsa/sort1.jpg"
      },
      {
        "id": 2,
        "title": "Tome 2 Euphorie",
        "description": "Bien malgré eux, Saléna et Simon provoqueront d'autres phénomènes inexpliqués qui viendront mettre une distance entre le club Salsa et leurs ex-amis. Les quatre amis parviendront- ils à se consacrer à leur mission, c'est-à-dire sauver Adeline?",
        "imageUrl": "assets/images/salsa/sort2.jpg"
      },
      {
        "id": 3,
        "title": "Tome 3 Révélation",
        "description": "La pauvre Samara constate avec effroi qu'elle a perdu l'habileté de redessiner la carte magique détruite deux fois. Sans cette carte reproduite parfaitement, Saléna ne peut rapporter la pomme d'or pour sauver la vie d'Adeline. De plus, une révélation leur sera transmise par un étrange androïde. Quelle est donc cette révélation?",
        "imageUrl": "assets/images/salsa/sort3.jpg"
      },
      {
        "id": 4,
        "title": "Tome 4 Sous haute surveillance",
        "description": "À Saint-Parlinpin, tout est sous haute surveillance. Mme Bellerive surveille ses piments ; monsieur Bellerive, ses sous ; madame Sirois, Saléna et Samara ; le maire, tous les phénomènes paranormaux de sa ville ; et Charline, son poids. Mais le plus surprenant viendra d'ailleurs, une nouvelle qui chamboulera le quartier et les jumelles Bellerive.",
        "imageUrl": "assets/images/salsa/sort4.jpg"
      },
      {
        "id": 5,
        "title": "Tome 5 Une sauce étonnante !",
        "description": "Pour le club Salsa, les choses se corsent. En raison d'un secret dévoilé par Simon, les jumelles doivent récupérer au plus vite une carte laissée à la grotte située dans le parc décrété dangereux et interdit par le maire de Saint-Parlinpin. Le club Salsa est sur le point de réaliser leur but lorsqu'une sauce étonnante viendra compliquer leur plan de match.",
        "imageUrl": "assets/images/salsa/sort5.jpg"
      },
      {
        "id": 6,
        "title": "Tome 6 Un feu étincelant !",
        "description": "À son arrivée à la vallée des sorcières, la troupe peine à trouver l’île. Ce sera Saléna qui aboutira seule sur cette île. Elle rencontrera le capitaine Cortés et son équipage. Rapidement, le voyage prendra une tournure sinistre. Toutefois, elle connaîtra enfin sa véritable mission à la toute fin de son périple. ",
        "imageUrl": "assets/images/salsa/sort6.jpg"
      }
    ]
  },
  {
    "id": "jeuxpouvoir",
    "title": "Les Jeux du pouvoir",
    "descriptionTitle": "Une liberté illusoire !",
    "description": "Vivant dans une ville autarcique et retirée, Noémie Cyr rêve de liberté et de voyages. Une occasion inespérée s’offre à elle, mais au fil du temps, cette opportunité tournera au cauchemar.Pour les détenteurs tout-puissants de plus de 85% des richesses du monde, la vie ne pèse pas lourd. Pour divertir la planète, ils ont concocté une télé-réalité où des épreuves mortelles attentent les candidats.",
    "imageUrl": "assets/images/jeuxpou/jeuxpou.jpg",
    "icons": [
      {"src": "assets/icons/robot.svg", "caption": "Science-fiction"},
      {"src": "assets/icons/age13.svg", "caption": "Age 13+"},
      {"src": "assets/icons/drop.svg", "caption": "Survie"}
    ],
    "color": "#214247",
    "colorBlock": "#636108",
    "books": [
      {
        "id": 1,
        "title": "Tome 1 Les pions",
        "description": "Altina ouvre ses portes à une des personnalités les plus riches et puissantes de la planète, monsieur Edgar Powell. Un concours visant à dénicher trois personnes talentueuses pour un travail bien particulier à Paradisa, un archipel situé loin de toute civilisation au milieu de l’océan Pacifique, est organisé non seulement à Altina, mais aussi partout dans le monde. Noémie, une jeune Altinaise tente sa chance à l’insu de sa famille et de son petit ami, Xavier, et s’inscrit à ce concours. Lorsqu’elle le leur apprend, ses proches désapprouvent vertement sa décision. Elle veut alors annuler sa candidature, mais elle constate qu’il est impossible de le faire.Choisie parmi un nombre imposant de candidats, des épreuves dites « amusantes » s’amorcent pour déterminer les gagnants qui s’envoleront pour Paradisa. Une étape mortelle se prépare. En sortira-t-elle vivante ?",
        "imageUrl": "assets/images/jeuxpou/jeux1.jpg"
      },
      {
        "id": 2,
        "title": "Tome 2 Les règles",
        "description": "Trente-six personnes, 12 pays, un combat : l’obtention d’une PAM (pile antimatière). Tel est le destin de Noémie Cyr : une bataille pour rapporter une PAM à Altina. Elle n’est pas seule dans cette course. Trente-cinq autres personnes désireront avec ardeur la même chose : ravir cette pile tant convoitée.Elles navigueront sur un luxueux paquebot à destination de Paradisa, mais le voyage sera loin d’être une croisière de rêve ; et que dire de leur arrivée à Paradisa ! Dès le départ, les compatriotes Noah Prost et Jade Vidal se tiennent ensemble et préparent en catimini un guet-apens pour qu’elle n’arrive jamais à Paradisa. Saura-t-elle éviter leur stratagème ? Parviendra-t-elle à Paradisa, là où la chasse vaut plus que la prise ?",
        "imageUrl": "assets/images/jeuxpou/jeux2.jpg"
      }
    ]
  },
  {
    "id": "detective",
    "title": "L’ Ame d’une détective",
    "descriptionTitle": "Il n’existe pas de crimes parfaits !",
    "description": "C’est avec une immense joie que la sergente-détective Martine Gendron accède à la section des homicides. 26 ans sont passés depuis la mort de son père. Quotidiennement, elle se remémore le jour où elle accompagnait fièrement son père et que celui-ci est décédé suite à une balle perdue lors d’un cambriolage d’une banque. À son grand désarroi, le meurtrier n’a jamais été retrouvé ainsi que ses comparses du vol par effraction. Consciente que la perte d’un être cher change une vie, elle se fera un devoir de rechercher coûte que coûte les criminels impunis.",
    "imageUrl": "assets/images/detective/detectiveban.jpg",
    "icons": [
      {"src": "assets/icons/polar.svg", "caption": "Polar"},
      {"src": "assets/icons/age13.svg", "caption": "Age 13+"},
      {"src": "assets/icons/justice.svg", "caption": "Justice"}
    ],
    "color": "#214247",
    "colorBlock": "#636108",
    "books": [
      {
        "id": 1,
        "title": "Tome 1 Mosaïque",
        "description": "Un cas compliqué échoue sur le bureau de Martine Gendron. Sur place, elle découvre une personne défigurée à coups d’un objet contondant gisant sans vie dans son lit. Aucune trace d’effraction. Une panoplie de suspects se présentera à elle, tous ayant plus ou moins une raison de le tuer. Plusieurs de ses collègues rêvent de s’approprier de ce cas et sont prêts à lui jouer dans le dos. Fort heureusement, quelques jours après un début cahoteux d’enquête, Bernard son supérieur immédiat lui rappela: « c’est ton enquête, ta première, ta vraie enquête. Elle t’appartient ». Cette phrase lui redonna confiance. Oui, elle le savait. Le métier d’enquêteur usait l’âme et déjà elle en ressentait les premiers effets. Sur une trame de roman policier, vous découvrirez la nature perturbée de Martine ainsi que ses hésitations et ses malaises. ",
        "imageUrl": "assets/images/detective/detective1.jpg"
      },
      {
        "id": 2,
        "title": "Tome 2 Les déesses de glace",
        "description": "Elle était resplendissante comme une poupée vitrifiée, comme une déesse dans son sanctuaire à quelques pas d’un large escalier de bois. Les arbres dissimulaient le haut de l’escalier. Martine avait envie de gravir cet escalier qui montait vers l’infini. Un calme mystérieux régnait et les enveloppait. Elle est parfaite. Ses cheveux sont bien placés. Martine Gendron et son compagnon Boris Popovich sont à la recherche de ce tueur qui tue en hiver et qui se limite à un secteur très particulier, la faculté de médecine de l’université de McGill. Bien vite, les horreurs de rites sataniques les hanteront et glaceront le sang des enquêteurs à la recherche de ce tueur en série. Lorsqu’une seconde tempête s’abat sur Montréal, Martine est convaincue qu’une quatrième victime décédera.",
        "imageUrl": "assets/images/detective/detective2.jpg"
      },
      {
        "id": 3,
        "title": "Tome 3 Animal",
        "description": "Martine épingle les photos de cinq fillettes sur le tableau de liège, cinq fillettes âgées entre 8 et 10 ans dont la disparition reste inexpliquée. Un mystère total. Pourtant, le premier cas remonte déjà à un peu moins de cinq ans. Des rencontres éprouvantes sont en vue. Certaines familles ont fait leur deuil, d’autres espèrent encore que leur enfant soit vivante, d’autres oscillent entre le deuil et la certitude de revoir leur enfant. Avec le temps, l’espoir s’effrite et les sentiments sont d’autant plus douloureux. Bien que le désir le plus profond de Martine soit de trouver ce ravisseur ou ce meurtrier, elle ne se sent pas la force nécessaire de les confronter et d’entendre leurs sanglots. Pourtant, une hantise l’obsède. Cet être ignoble est sur le point de récidiver. Martine doit maîtriser ses émotions et foncer à la recherche de ce monstre, de cet animal. Arrivera-t-elle à temps pour contrecarrer son plan machiavélique, avant qu’une sixième fillette ne tombe entre ses sales mains?",
        "imageUrl": "assets/images/detective/detective3.jpg"
      }
    ]
  },
  {
    "id": "skyz",
    "title": "Le monde selon Skyz",
    "descriptionTitle": "L’espoir d’un monde meilleur !",
    "description": "Jonathan, un garçon de 12 ans, et Élisabeth, une fillette de 10 ans, se retrouvent sous la domination d’envahisseurs barbares. Ensemble, ils s’évaderont de l’usine de fabrication d’antozonite et partiront à la recherche d’une solution à la libération de leurs compagnons.",
    "imageUrl": "assets/images/skyz/skyz.png",
    "icons": [
      {"src": "assets/icons/robot.svg", "caption": "Science-fiction"},
      {"src": "assets/icons/age13.svg", "caption": "Age 13+"},
      {"src": "assets/icons/drop.svg", "caption": "Survie"}
    ],
    "color": "#808080",
    "colorBlock": "#cc9900",
    "books": [
      {
        "id": 1,
        "title": "Tome 1 Le second élément",
        "description": "Grand-Valmont, une ville touristique et prospère, est soudainement coupée du monde entier par deux hordes d’envahisseurs barbares: d’un côté, des Deuxcôtés, des guerriers exécuteurs et de l’autre, des Cracos, des organisateurs ayant une force extraordinaire malgré leur petite taille. Ces deux peuples travaillent en symbiose et n’ont qu’un seul but: s’emparer d’une matière rare en grande quantité. Pour ce faire, ils tuent les adultes pour ne garder que les enfants âgés de 7 à 14 ans, une main-d’œuvre docile et sans défense. Jonathan, un garçon de 12 ans, et Élisabeth, une fillette de 10 ans, font partie de ces jeunes dociles et travaillent dans une usine d’assemblage d’antozonite, le pétrole pourpre. Lors d’un orage sévère, ils s’échapperont de leur prison et réussiront à fuir la ville envahie. Une dame leur indique de se diriger vers la montagne. Réussiront-ils à s’y rendre en toute sécurité et à trouver l’aide pour libérer leurs compagnons de l’emprise de ses envahisseurs ?",
        "imageUrl": "assets/images/skyz/skyz1.jpg"
      },
      {
        "id": 2,
        "title": "Tome 2 L’étrange zone 4",
        "description": "Jonathan, sa mère et sa petite amie de cœur (Valérie) retournent à Grand-Valmont, une ville sinistrée, pour une commémoration en l’honneur de tous ceux qui avaient péri trois ans auparavant. Pour l’occasion, un grand nombre de journalistes, de touristes et d’anciens Grand-Valmontois les accompagneront ainsi que les promoteurs de cette nouvelle ville devenue un centre d’attraction grâce à un magnifique hôtel, son casino et d’une salle de spectacles. Une mystérieuse sculpture voilée trône près de l’hôtel Le Mémorable et donc son dévoilement est prévu la dernière journée.Lors du dévoilement de cette pièce, tout tourne au cauchemar. Jonathan et Valérie se voient confronter à nouveau avec des Cracos, de brillants organisateurs et des Deuxcôtés, des guerriers exécuteurs. Mais d’où viennent-ils ?",
        "imageUrl": "assets/images/skyz/skyz2.jpg"
      }
    ]
  }
];

@Injectable()
export class BooksService {

  getSeries(): Serie[] {
    return books;
  }
}
