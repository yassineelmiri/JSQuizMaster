Avec la montée en puissance des formations en ligne et des besoins d’évaluation continue, votre entreprise souhaite développer une solution innovante pour digitaliser les processus d’examens et de quiz. C’est dans ce cadre qu’est née "JSQuizMaster", une application destinée aux établissements éducatifs, aux centres de formation, et aux entreprises souhaitant évaluer les compétences de leurs apprenants ou employés.

​

✍ Contraintes et Exigences Fonctionnelles:

👋 Un test(Examen) est proposé/rédigé par un formateur.

👋 Un test concerne plusieurs sujets et sous-sujets.

👋 Une question est attachée à un sujet unique.

👋 Une question appartienne à un niveau.

👋 Une question à plusieurs réponses(Correctes et fausses).

👋 Un étudiant pour passer le même test plusieurs fois après demande au formateur en précisant la raison de la demande.

👋 un test doit être programmé entre deux dates/heures.

👋Le formateur peut programmer les tests pour les étudiants à des dates/heures différentes.

👋 Le système doit enregistrer toutes les réponses à toutes les questions dans tous les tests pour tous les étudiants en précisant le nombre de points obtenus pour chaque question.

👋Un test est caractérisé par: score de réussite, droit de visualiser les réponses, droit de voir le résultat à la fin du test, le nombre de chances, remarques et consignes.

👋 Une question est caractérisés par: nombre de réponses, nombre de réponses correctes, texte de la question, images, figures, sons, vidéos, type(une ou plusieurs réponses), le nombre de points.

👋 Un niveau est caractérisé par: description , nombre de points maximum et minimum.

👋 Une réponse est caractérisée par le texte de réponse.

👋 Une réponse peut être correcte pour une question et fausse pour une autre question.

👋 Un sujet est caractérisé par un intitulé.
👋 Un étudiant est caractérisé par un nom, prénom, date de naissance, adresse, et une date d’inscription.
👋 Un formateur est aussi caractérisé par un nom, prénom, date de naissance, adresse et une spécialité.
👋 Le système doit enregistrer pour un passage d’un test les informations suivantes: score obtenu, le numéro de la tentative, résultat final.

​

​

​

🚨Contraintes et Exigences Techniques :

◼ L'application doit être développée en utilisant Node.js et Express.js pour assurer une performance optimale et une gestion efficace des requêtes HTTP.
◼ L'architecture de l'application doit suivre le modèle MVC (Modèle-Vue-Contrôleur) pour une séparation claire des responsabilités et une meilleure organisation du code.
◼ Les opérations de manipulation des données doivent être implémentées en utilisant des "requêtes SQL natives" pour optimiser les performances des transactions complexes.
◼ Le système doit intégrer un mécanisme de gestion des erreurs robuste pour capturer et traiter les exceptions de manière centralisée.
◼ Les données utilisateur doivent être protégées via des meilleures pratiques de sécurité, incluant la validation et l’assainissement des entrées pour prévenir les attaques. -◼ L'application doit être dockerisée pour assurer une déploiement facile et une cohérence entre les environnements de développement, de test et de production. Les Dockerfiles doivent être créés pour définir les images et les configurations nécessaires.