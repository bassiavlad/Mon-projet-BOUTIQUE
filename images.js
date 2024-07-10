// Images.js
const db = require('./db');

class Images {
    static getAll(callback) {
        const sql = 'SELECT * FROM Images';
        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }

    static getById(id, callback) {
        const sql = 'SELECT * FROM Images WHERE id_images = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
}

module.exports = Images;
