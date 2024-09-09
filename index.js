const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const indexRoutes = require('./routes/index');
const profileRoutes = require('./routes/profileRoutes');
const formateurRoutes = require('./routes/formateurRoutes');

const app = express();
const port = 3000;

app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/', profileRoutes);
app.use('/', formateurRoutes);

app.listen(port, () => {
  console.log(`Server running on port : http://localhost:${port}/`);
});
