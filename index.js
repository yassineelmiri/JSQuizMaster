const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const profileController = require('./controllers/profileController');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/add_profile", (req, res) => {
  res.render("profile/add_profile");
});

app.post("/add_profile", profileController.addProfile);

app.listen(port, () => {
  console.log(`Server running on port : http://localhost:${port}/`);
});
