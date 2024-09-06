const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Créer la connexion à la base de données MySQL
const db = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'db', // Nom du service MySQL dans docker-compose
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'admin',
    database: process.env.MYSQL_DATABASE || 'jcc'
});

// Fonction pour se connecter à MySQL avec réessai en cas d'échec
function connectWithRetry() {
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err.stack);
            setTimeout(connectWithRetry, 2000); // Réessayer après 2 secondes
        } else {
            console.log('Connected to MySQL');
        }
    });
}

// Connecter à MySQL
connectWithRetry();

//Endpoints
app.get('/api/prof', (req, res) => {
    db.query("SELECT * FROM prof", function (error, response) {
        if (error) {
            return console.log(error);
        }
        console.log(res.status(200).send(response));
        res.status(200).send(response);
    });
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});