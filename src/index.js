const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');
const bp = require('body-parser');
const methodOverride = require('method-override');
const sortMiddleware = require('./app/middleware/SortMiddleware');

db.connect();

const app = express();
const port = 3000;

// HTTP logger
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(sortMiddleware);

// Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: require('./helpers/handlebars'),
  }),
);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});