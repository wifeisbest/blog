const express = require('express');
const router = express.Router();

const travelControllers = require('../app/controllers/Travelcontroller');


router.get('/', travelControllers.index)

module.exports = router;
