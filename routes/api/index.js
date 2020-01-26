const router = require('express').Router();

// this is an example of an authentication strategy on api requests
// while logged in, the user onject is attached to all http requests
// and is accessible as req.user.  If req.user is truthy, the route 
// is accessible. 
router.get('/secrets', (req, res) => {
    // eslint-disable-next-line no-unused-expressions
    req.user
      ? res.json('In the long run, we only hit what we aim at...(~someone else)')
      : res.json('not authenticated');
  });

module.exports = router;
