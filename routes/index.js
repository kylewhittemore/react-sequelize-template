const router = require('express').Router();
// const path = require('path');
// const apiRoutes = require('./api');
const authRoutes = require('./auth/auth-routes');

// router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  res.json('api route');
});

router.use('/auth', authRoutes);


module.exports = router;
