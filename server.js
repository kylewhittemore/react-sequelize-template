const express = require('express');
const session = require('express-session');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');
const bodyParser = require('body-parser');


const db = require('./models');
const routes = require('./routes');

const PORT = process.env.PORT || 8080;

const app = express();

// Morgan Logger middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// app.use(express.static(path.join(__dirname, 'build')));
// -app.get('/', function (req, res) {
app.use('/api', routes);

app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Sync sequelize models then start Express app
// =============================================
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
