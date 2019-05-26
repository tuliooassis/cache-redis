const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customers.controller');

router.get('/', (req, res, next) => {
    customersController.getAllUser()
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
    customersController.getUser(req.params.id)
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
    customersController.delUser(req.params.id)
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
