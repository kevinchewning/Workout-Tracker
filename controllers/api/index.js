const router = require('express').Router();
const dataRoutes = require('./dataRoutes');

router.use('/', dataRoutes);

module.exports = router;
