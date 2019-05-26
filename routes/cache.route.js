const express = require('express');
const router = express.Router();
const cacheController = require('../controllers/cache.controller');

router.get('/', (req, res, next) => {
    cacheController.getAllUser()
        .then(response => {
            res.send({
                success: true,
                result: response
            })
        }).catch(err => {
            res.status(500).send({
                success: false,
                result: err
            })
        });
});

router.get('/:id', (req, res, next) => {
    cacheController.getUser(req.params.id)
        .then(response => {
            res.send({
                success: true,
                result: response
            })
        }).catch(err => {
            res.status(500).send({
                success: false,
                result: err
            })
        });
});

router.delete('/:id', (req, res, next) => {
    cacheController.delUser(req.params.id)
        .then(response => {
            res.send({
                success: true,
                result: response
            })
        }).catch(err => {
            res.status(500).send({
                success: false,
                result: err
            })
        });
});

module.exports = router;
