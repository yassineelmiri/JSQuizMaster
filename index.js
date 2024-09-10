const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const indexRoutes = require('./routes/index');
const profileRoutes = require('./routes/profileRoutes');
const formateurRoutes = require('./routes/formateurRoutes');
const authenticationRoute = require('./routes/authenticationRoute.js');
const classesRoutes = require('./routes/classesRoutes.js');
const ProfessorRouter = require('./routes/professorRoutes.js');
const testRouter = require('./routes/testRoutes.js');
const subjectRouter = require('./routes/subjectRoutes.js');
const levelRouter = require('./routes/levelRoutes.js');
const mediaRoutes = require('./routes/mediaRoute.js');
const questionRoutes = require('./routes/questionRoute.js');

const session = require('express-session');
const morgan = require('morgan');

const setUserMiddleware = require('./middlewares/setUser');
const ejsLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'jhgaehfzjQKZKNSLBRYIAZ74GBQN',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(morgan('dev'));

app.use(setUserMiddleware);

app.use(ejsLayouts);

app.use("/", ProfessorRouter);
app.use("/", testRouter);
app.use("/", subjectRouter);
app.use("/", levelRouter);
app.use('/', authenticationRoute);
app.use('/', classesRoutes);
app.use('/', mediaRoutes);
app.use('/', questionRoutes);

app.listen(port, () => {
  console.log(`Server running on port : http://localhost:${port}/`);
});
