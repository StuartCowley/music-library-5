const express = require('express');
const artistController = require('../controllers/artistController');

const artistRouter = express.Router();

artistRouter.post('/', artistController.create);

artistRouter.get('/', artistController.read);

artistRouter.get('/:artistId', artistController.readById);

artistRouter.patch('/:artistId', artistController.update);

artistRouter.delete('/:artistId', artistController.delete);

module.exports = artistRouter;