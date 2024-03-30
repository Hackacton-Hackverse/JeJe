# Titre du Projet

Ce projet est une application Node.js utilisant le framework Express.js et la base de données MongoDB.
C'est le backend d'un TO DO App dans le cadre du Hackaton-HackVerse

## Prérequis

- Node.js
- MongoDB

## Installation

Clonez le dépôt et installez les dépendances :

```bash
git clone url_du_projet
cd nom_du_projet
npm install
```

## Configuration

Modifier la chaîne de connexion à votre base de données MongoDB selon que votre base de donnes a activer l'authentification :

```env
DATABASE_URL=mongodb://localhost:27017/jejeTasks
```

Si votre base de données MongoDB est sécurisée, assurez-vous d'inclure les informations d'authentification dans la chaîne de connexion :

```env
DATABASE_URL=mongodb://user:password@127.0.0.1:27017/jejeTasks
```

## Démarrage

Il faut que le serveur MongoDB locale soit en marche  

Pour lancer l'application, exécutez :

```bash
npm start
```