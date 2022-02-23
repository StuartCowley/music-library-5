const express = require('express');
const artistController = require('../controllers/artistController');

const router = express.Router();

router.post('/', artistController.create);

router.get('/', artistController.read);

router.get('/:artistId', artistController.readById);

router.patch('/:artistId', artistController.update);

router.delete('/:artistId', artistController.delete);

module.exports = router;