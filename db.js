
const express = require('express');
const path = require('path');

const app = express();
;

// Vérifiez que le chemin vers le module 'route' est correct
const route = require('../../route/route');

app.use('/static', express.static(path.resolve(__dirname, '../public'))); // Notez l'absence de '/' avant 'public'

// Utilisez le module de routes
app.use('/api', route);

// Votre code ici (par exemple, définition des routes, connexion à la base de données, etc.)
const mysql = require('mysql');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bassia'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

module.exports = db;

module.exports = app;
