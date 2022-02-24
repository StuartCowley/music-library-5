const express = require('express');
const albumController = require('../controllers/albumController');

const albumRouter = express.Router();

albumRouter.post('/', albumController.create);

albumRouter.get('/', albumController.read);

albumRouter.get('/:albumId', albumController.readById);

albumRouter.patch('/:albumId', albumController.update);

albumRouter.delete('/:albumId', albumController.delete);


module.exports = albumRouter;
