// Passport Auth Middleware
// =============================================
// This is middleware for restricting routes a user is not allowed to visit if not logged in
// For example:
//    router.get('/secrets', isAuthenticated, (req, res) => {
//      res.json('In the long run, we only hit what we aim at...(~someone else)');
//    });
// The middleware can be applied to specific routes. For our purposes, since we are using React
// which is a single page application, we only need to use this middleware on api routes.
// The React router will handle restricting client-side page access

const authMiddleware = (req, res, next) => {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }
  // if the user is not logged in, return a 401 with message, the client will route the
  // user based on the response.
  return res.status(401).json('not authenticated');
};

module.exports = authMiddleware;
