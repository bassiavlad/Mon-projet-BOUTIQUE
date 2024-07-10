// Ajouters.js
const db = require('./db');

class Ajouters {
    static getAll(callback) {
        const sql = 'SELECT * FROM Ajouters';
        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }

    static getById(id, callback) {
        const sql = 'SELECT * FROM Ajouters WHERE id_article = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
}

module.exports = Ajouters;
