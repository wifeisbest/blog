const express = require('express');
const meRouter = express.Router();

const meController = require('../app/controllers/MeController');

meRouter.get('/stored/name',meController.me);

module.exports = meRouter;
