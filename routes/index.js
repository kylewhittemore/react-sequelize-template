const router = require('express').Router();
const authRoutes = require('./auth/auth-routes');

// this is an example of an authentication strategy on api requests
// while logged in, the user onject is attached to all http requests
// and is accessible as req.user.  If req.user is truthy, the rout
router.get('/secrets', (req, res) => {
  // eslint-disable-next-line no-unused-expressions
  req.user
    ? res.json('In the long run, we only hit what we aim at...(~someone else)')
    : res.json('not authenticated');
});

router.use('/auth', authRoutes);

module.exports = router;
