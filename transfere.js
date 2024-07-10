// Transferes.js
const db = require('./db');

class Transferes {
    static getAll(callback) {
        const sql = 'SELECT * FROM Transferes';
        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }

    static getById(id, callback) {
        const sql = 'SELECT * FROM Transferes WHERE id_articles = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
}

module.exports = Transferes;
