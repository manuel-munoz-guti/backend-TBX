const router = require('express').Router();
const response = require('express');
const { getAllfilesDataController } = require('../controllers/filesController');

router.get('/data', getAllfilesDataController );

module.exports = router;