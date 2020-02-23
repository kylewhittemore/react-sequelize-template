// Passport Auth Middleware
// =============================================
// This is middleware for restricting routes a user is not allowed to visit if not logged in
// For example:
//    router.get('/secrets', isAuthenticated, (req, res) => {
//      res.json('Talk is cheap. Show me the code. -Linus Torvalds');
//    });
// The middleware can be applied to specific routes. For our purposes, since we are using React
// which is a single page application, we only need to use this middleware on api routes.
// The React router will handle restricting client-side page access.  If you were using multiple
// pages, you would want to authenticate the restricted html routes as well.

const authMiddleware = (req, res, next) => {
  // If the user is logged in, continue with the request to the restricted route.
  // Next() is the third argument in the GET route in the comments above. It is basically
  // the part of the route you would have written even if you werent using middleware.
  // In this case next() === (req, res) => { res.json('something to say') }
  if (req.isAuthenticated()) {
    return next();
  }
  // if the user is not logged in, return a 401 with message, the client will route the
  // user based on the response.
  return res.json('not authenticated');
};

module.exports = authMiddleware;
