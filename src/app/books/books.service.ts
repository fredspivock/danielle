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
    "title": "Order Des 5 Dragons",
    "descriptionTitle": "Une qfwsdfsuête fantastique!",
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
  }
];

@Injectable()
export class BooksService {

  getSeries():Serie[] {
    return books;
  }
}
