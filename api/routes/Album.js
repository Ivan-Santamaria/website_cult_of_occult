const express = require('express');
const router = express.Router();
const AlbumCtrl = require('../controllers/Album.js');

//-------------------------------------

router.get('/:id', AlbumCtrl.getOneAlbum);

router.get('/', AlbumCtrl.getAllAlbums);

module.exports = router;
