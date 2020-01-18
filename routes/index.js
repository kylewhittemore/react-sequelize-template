const router = require('express').Router();
const path = require('path');
// const apiRoutes = require('./api');
const authRoutes = require('./auth/auth-routes');

// router.use('/api', apiRoutes);

router.use('/auth', authRoutes);
router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

module.exports = router;
