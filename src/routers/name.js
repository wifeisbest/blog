const express = require('express');
const nameRouter = express.Router();

const nameRoute = require('../app/controllers/NameController');

nameRouter.get('/create',nameRoute.create);
nameRouter.post('/store',nameRoute.store);
nameRouter.get('/:slug',nameRoute.show);

module.exports = nameRouter;
