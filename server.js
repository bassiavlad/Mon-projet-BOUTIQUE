// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Importer le middleware cors
const path = require('path');
const db = require('./public/modeles/db');
const app = require('./public/modeles/db');
const routes = require('./route/route.js');
const port = process.env.PORT || 3000;
app.use(cors());




app.use('/static',express.static(path.resolve(__dirname, '/public'))) 
app.use(express.json());
app.use('/api', routes);


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Remplacez par votre mot de passe
    database: 'bassia', // Remplacez par le nom de votre base de données
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err.stack);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

app.get('/api/utilisateurs', (req, res) => {
    connection.query('SELECT * FROM Utilisateurs', (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération des utilisateurs:', error);
            res.status(500).send('Erreur serveur');
            return;
        }
        res.json(results);
    });
});

app.get('/api/articles', (req, res) => {
    connection.query('SELECT * FROM Articles', (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération des articles:', error);
            res.status(500).send('Erreur serveur');
            return;
        }
        res.json(results);
    });
});

app.get('/api/images', (req, res) => {
    connection.query('SELECT * FROM Images', (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération des images:', error);
            res.status(500).send('Erreur serveur');
            return;
        }
        res.json(results);
    });
});

app.get('/api/factures', (req, res) => {
    connection.query('SELECT * FROM Factures', (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération des factures:', error);
            res.status(500).send('Erreur serveur');
            return;
        }
        res.json(results);
    });
});

app.get('/api/ajouters', (req, res) => {
    connection.query('SELECT * FROM Ajouters', (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération des ajouters:', error);
            res.status(500).send('Erreur serveur');
            return;
        }
        res.json(results)
    });
});

app.get('/api/appartenir', (req, res) => {
    connection.query('SELECT * FROM Appartenir', (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération des appartenir:', error);
            res.status(500).send('Erreur serveur');
            return;
        }
        res.json(results);
    });
});

app.get('/api/transferes', (req, res) => {
    connection.query('SELECT * FROM Transferes', (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération des transferes:', error);
            res.status(500).send('Erreur serveur');
            return;
        }
        res.json(results);
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
