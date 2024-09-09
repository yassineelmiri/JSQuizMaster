const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const ProfessorRouter = require('./routes/professorRoutes');


app.use(express.json())

app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/",ProfessorRouter);



app.get("/", (req, res) => {
  res.render("home");
});


app.listen(port, () => {
  console.log(`Server running on port : http://localhost:${port}/`);
});
