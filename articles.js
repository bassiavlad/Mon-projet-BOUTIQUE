const db = require('./db');

class Articles {
    static getAll(callback) {
        const sql = 'SELECT * FROM Articles';
        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }

    static getAllAdult(callback) {
        const sql = "SELECT * FROM Articles WHERE Noms = 'Football'"; 
        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }

    static getAllRugby(callback) {
        const sql = "SELECT * FROM Articles WHERE Noms = 'Rugby'"; 
        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }

    static getById(id, callback) {
        const sql = 'SELECT * FROM Articles WHERE id_articles = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
}

module.exports = Articles;
