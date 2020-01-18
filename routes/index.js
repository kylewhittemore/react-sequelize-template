const router = require('express').Router();
const authRoutes = require('./auth/auth-routes');

router.get('/', (req, res) => {
  res.json('api route');
});

router.use('/auth', authRoutes);

module.exports = router;
