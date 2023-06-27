const express = require('express');
const router = express.Router();

const auth = require('../middleware/Auth');
const ShowsCtrl = require('../controllers/Shows');

router.get('/', ShowsCtrl.getAllShows);

router.get('/:id', ShowsCtrl.getOneShow);

module.exports = router;
