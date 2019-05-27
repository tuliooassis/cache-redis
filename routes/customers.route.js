const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customers.controller');

/*
 * Retorna todos os usuários presentes na cache, ou seja,
 * todos os usuários que não devem ser impactados pela pesquisa.
*/
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

/*
 * Verifica se o usuário pode ou não ser impactado por uma pesquisa.
 */
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

/*
 * Deleta o usuário da cache, permitindo que ele seja impactado pela pesquisa.
 */
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
