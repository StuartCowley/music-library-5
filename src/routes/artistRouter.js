const express = require('express');
const artistController = require('../controllers/artistController');

const router = express.Router();

router.post('/', artistController.create);

module.exports = router;