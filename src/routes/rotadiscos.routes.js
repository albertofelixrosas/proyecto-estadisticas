const express = require('express');
const router = express.Router();

const controller = require('../controllers/rotadiscos.controller');

router.get('/rotadiscos', controller.index);

module.exports = router;