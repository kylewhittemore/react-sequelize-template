const express = require('express');
const session = require('express-session');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');

const db = require('./models');
const routes = require('./routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', routes);

// Sync sequelize models then start Express app
// =============================================
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
