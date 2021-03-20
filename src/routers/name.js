const express = require('express');
const nameRouter = express.Router();

const nameRoute = require('../app/controllers/NameController');

nameRouter.get('/create',nameRoute.create);
nameRouter.post('/store',nameRoute.store);
nameRouter.get('/:slug',nameRoute.show);
nameRouter.get('/:id/edit',nameRoute.edit);
nameRouter.put('/:id',nameRoute.update);

module.exports = nameRouter;
