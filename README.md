# JSQuizMaster

JSQuizMaster est une application innovante destinée à digitaliser les processus d'examens et de quiz pour les établissements éducatifs, les centres de formation et les entreprises souhaitant évaluer les compétences de leurs apprenants ou employés.

## Contexte du projet

Avec l'essor des formations en ligne et des évaluations continues, JSQuizMaster vise à faciliter la création, la gestion et le suivi des examens et des quiz pour les formateurs et les administrateurs. L'application permet aux formateurs de créer des tests, de les planifier, et de suivre les performances des étudiants en temps réel.

## Fonctionnalités clés

- **Création et gestion des tests/examens** : Les formateurs peuvent créer des tests contenant plusieurs questions réparties sur divers sujets et sous-sujets.
- **Gestion des niveaux** : Chaque question est associée à un niveau (débutant, intermédiaire, avancé) avec un score défini.
- **Types de réponses multiples** : Les questions peuvent avoir des réponses correctes et incorrectes, permettant différents types de quiz.
- **Programmation des tests** : Les tests peuvent être programmés à des dates et heures spécifiques pour différents étudiants.
- **Gestion des tentatives** : Les étudiants peuvent passer le même test plusieurs fois après demande au formateur.
- **Enregistrement des résultats** : Les résultats et les réponses des étudiants sont enregistrés pour chaque tentative, avec un suivi des scores obtenus.

## Contraintes fonctionnelles

- Chaque test peut inclure plusieurs sujets et sous-sujets.
- Une question appartient à un sujet unique et est caractérisée par un texte, des images, des figures, des vidéos, ou des sons.
- Chaque test a un score de réussite et des droits configurables pour visualiser les réponses et les résultats.
- Les étudiants et formateurs sont caractérisés par des informations personnelles (nom, prénom, adresse, etc.).
- Un système de suivi des tentatives de tests avec le score et les résultats est implémenté.

## Contraintes techniques

- **Node.js & Express.js** : L'application utilise Node.js pour une performance optimale et Express.js pour la gestion des requêtes HTTP.
- **Architecture MVC** : Le modèle MVC est utilisé pour structurer le code et séparer les responsabilités (Modèle, Vue, Contrôleur).
- **SQL natif** : Les requêtes SQL sont utilisées pour optimiser les transactions et manipulations des données.
- **Gestion des erreurs** : Un mécanisme centralisé de gestion des erreurs est implémenté pour capturer et traiter les exceptions.
- **Sécurité des données** : Validation et assainissement des entrées pour protéger contre les attaques courantes (injections SQL, XSS, etc.).
- **Docker** : L'application est dockerisée pour faciliter le déploiement et assurer la cohérence entre les environnements de développement, test et production. Des fichiers Docker sont fournis pour la configuration.

## Prérequis

- **Node.js** v14+ (ou version compatible)
- **Docker** v20+ pour la conteneurisation
- **MySQL** pour la base de données
- **phpMyAdmin** pour la gestion de la base de données

## Installation

1. Clonez le projet depuis GitHub :

```bash
git clone https://github.com/ahmed-hounati/JSQuizMaster.git
```

2. Accédez au répertoire du projet :

```bash
cd JSQuizMaster
```

3. Installez les dépendances :

```bash
npm install
```

4. Lancez l'application avec Docker :

```bash
docker-compose up --build
```

5. Accédez à l'application à l'adresse suivante : `http://localhost:3000`.

## Utilisation

1. Accédez à phpMyAdmin pour gérer la base de données à l'adresse : `http://localhost:8080`.
2. Configurez les paramètres de connexion dans le fichier `.env` pour correspondre à vos besoins.
3. Utilisez l'interface pour créer des tests, programmer des examens et suivre les performances des étudiants.

## Architecture du projet

L'application suit l'architecture MVC :
- **Modèle** : Gère l'accès et la manipulation des données.
- **Vue** : Affiche les pages HTML et les résultats des requêtes utilisateur.
- **Contrôleur** : Gère les requêtes HTTP et fait le lien entre le Modèle et la Vue.

## Contributeurs

- **Yassine** - Développeur Full Stack
- **Ahmed** - Développeur  Full Stack
- **Khalid** - Développeur  Full Stack
