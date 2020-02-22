const express = require('express');
const session = require('express-session');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');
const bodyParser = require('body-parser');
const db = require('./models');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// Express boilerplate middleware
// =============================================
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Express session middleware
// =============================================
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Routing
// =============================================
app.use('/api', routes);

// Everything that is not an api request is sent to index.html
// for client side routing.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Sync sequelize models then start Express app
// =============================================
db.sequelize.sync({ force: false })
  .then(() => {
    console.log('\n*************************************');
    console.log(`${process.env.DB_NAME} database connected`);
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on PORT ${PORT}`);
      console.log('*************************************\n');
    });
  });
