// routes.js
const express = require('express');
const router = express.Router();
const utilisateurs = require('../public/modeles/utilisateurs');
const Articles = require('../public/modeles/articles');
const Images = require('../public/modeles/images');
const Factures = require('../public/modeles/factures');
const Ajouters = require('../public/modeles/ajouter');
const Appartenir = require('../public/modeles/appartenir');
const Transferes = require('../public/modeles/transfere');


router.get('/utilisateurs', (req, res) => {
    utilisateurs.getUtilisateurs((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(data);
        }
    });
});

// Ajoutez d'autres routes si nécessaire

module.exports = router;



// Routes pour Utilisateurs
router.get('/utilisateurs', (req, res) => {
    Utilisateurs.getAll(results => {
        res.json(results);
    });
});

router.get('/utilisateurs/:id', (req, res) => {
    Utilisateurs.getById(req.params.id, result => {
        res.json(result);
    });
});

// Routes pour Articles
router.get('/articles', (req, res) => {
    Articles.getAll(results => {
        res.json(results);
    });
});
router.get('/rugby', (req, res) => {
    Articles.getAllRugby(results => {
        res.json(results)
    });
})
router.get('/articleTennis', (req, res) => {
    Articles.getAllAdult(results => {
        res.render('index',results);
    });
})

router.get('/articleBoxe', (req, res) => {
    Articles.getAllAdult(results => {
        res.render('index',results);
    });
})


router.get('/articleBasket', (req, res) => {
    Articles.getAllAdult(results => {
        res.render('index',results);
    });
})


router.get('/articles/:id', (req, res) => {
    Articles.getById(req.params.id, result => {
        res.json(result);
    });
});

// Routes pour Images
router.get('/images', (req, res) => {
    Images.getAll(results => {
        res.json(results);
    });
});

router.get('/images/:id', (req, res) => {
    Images.getById(req.params.id, result => {
        res.json(result);
    });
});

// Routes pour Factures
router.get('/factures', (req, res) => {
    Factures.getAll(results => {
        res.json(results);
    });
});

router.get('/factures/:id', (req, res) => {
    Factures.getById(req.params.id, result => {
        res.json(result);
    });
});

// Routes pour Ajouters
router.get('/ajouters', (req, res) => {
    Ajouters.getAll(results => {
        res.json(results);
    });
});

router.get('/ajouters/:id', (req, res) => {
    Ajouters.getById(req.params.id, result => {
        res.json(result);
    });
});

// Routes pour Appartenir
router.get('/appartenir', (req, res) => {
    Appartenir.getAll(results => {
        res.json(results);
    });
});

router.get('/appartenir/:id', (req, res) => {
    Appartenir.getById(req.params.id, result => {
        res.json(result);
    });
});

// Routes pour Transferes
router.get('/transferes', (req, res) => {
    Transferes.getAll(results => {
        res.json(results);
    });
});

router.get('/transferes/:id', (req, res) => {
    Transferes.getById(req.params.id, result => {
        res.json(result);
    });
});

module.exports = router;
