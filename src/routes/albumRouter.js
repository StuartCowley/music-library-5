//const { Artist } = require('../models/artistModel');
const express = require('express');
const { createAlbum, findAllAlbums, findAlbumByPk, updateAlbum, deleteAlbum } = require('../controllers/albumController');

const albumRouter = express.Router();

albumRouter.post('/artists/:artistId', createAlbum);
albumRouter.get('/', findAllAlbums);
albumRouter.get('/:albumId', findAlbumByPk);
albumRouter.patch('/:albumId', updateAlbum);
albumRouter.delete('/:albumId', deleteAlbum);

module.exports = albumRouter;


/*
const express = require('express');
const albumController = require('../controllers/albumController');

const albumRouter = express.Router();

albumRouter.post('/', albumController.create);

albumRouter.get('/', albumController.read);

albumRouter.get('/:albumId', albumController.readById);

albumRouter.patch('/:albumId', albumController.update);

albumRouter.delete('/:albumId', albumController.delete);


module.exports = albumRouter;
*/
