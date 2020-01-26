const router = require('express').Router();
const authRoutes = require('./auth/auth-routes');
const apiRoutes = require('./api/index');

router.use('/', apiRoutes)

router.use('/auth', authRoutes);

module.exports = router;
