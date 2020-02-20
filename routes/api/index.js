const router = require('express').Router();
const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.get('/secrets', isAuthenticated, (req, res) => {
  res.json('In the long run, we only hit what we aim at...(~someone else)');
});

module.exports = router;
