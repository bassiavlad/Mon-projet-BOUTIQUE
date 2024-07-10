// Factures.js
const db = require('./db');

class Factures {
    static getAll(callback) {
        const sql = 'SELECT * FROM Factures';
        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }

    static getById(id, callback) {
        const sql = 'SELECT * FROM Factures WHERE id_Facture = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
}

module.exports = Factures;
