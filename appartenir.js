// Appartenir.js
const db = require('./db');

class Appartenir {
    static getAll(callback) {
        const sql = 'SELECT * FROM Appartenir';
        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }

    static getById(id, callback) {
        const sql = 'SELECT * FROM Appartenir WHERE id_articles = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
}

module.exports = Appartenir;
