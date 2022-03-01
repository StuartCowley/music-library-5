const express = require('express');
//const { Artist } = require('../models/artistModel');
const { createArtist, findAllArtists, findArtistByPk, updateArtist, deleteArtist } = require('../controllers/artistController');

const artistRouter = express.Router();

artistRouter.post('/', createArtist);
artistRouter.get('/', findAllArtists);
artistRouter.get('/:artistId', findArtistByPk);
artistRouter.patch('/:artistId', updateArtist);
artistRouter.delete('/:artistId', deleteArtist);

module.exports = artistRouter;

/*
const express = require('express');
const artistController = require('../controllers/artistController');

const artistRouter = express.Router();

artistRouter.post('/', artistController.create);

artistRouter.get('/', artistController.read);

artistRouter.get('/:artistId', artistController.readById);

artistRouter.patch('/:artistId', artistController.update);

artistRouter.delete('/:artistId', artistController.delete);

module.exports = artistRouter;
*/