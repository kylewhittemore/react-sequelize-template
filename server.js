const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

const db = require('./models');
const routes = require('./routes');

const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
