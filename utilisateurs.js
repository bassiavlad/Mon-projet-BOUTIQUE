
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bassia'
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err.stack);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

const getUtilisateurs = (callback) => {
    connection.query('SELECT * FROM Utilisateurs', (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results);
    });
};

module.exports = { getUtilisateurs };
