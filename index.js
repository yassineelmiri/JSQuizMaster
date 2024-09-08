const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const ProfessorRouter = require('./routes/professorRoutes');

app.use(ProfessorRouter);


app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));



app.get("/", (req, res) => {
  res.render("home");
});


app.listen(port, () => {
  console.log(`Server running on port : http://localhost:${port}/`);
});
