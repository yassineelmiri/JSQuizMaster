const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const ProfessorRouter = require('./routes/professorRoutes');
const testRouter = require('./routes/testRoutes');
const subjectRouter = require('./routes/subjectRoutes');
const levelRouter = require('./routes/levelRoutes');


app.use(express.json())

app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", ProfessorRouter);
app.use("/", testRouter);
app.use("/", subjectRouter);
app.use("/", levelRouter);



app.get("/", (req, res) => {
  res.render("home");
});


app.listen(port, () => {
  console.log(`Server running on port : http://localhost:${port}/`);
});
