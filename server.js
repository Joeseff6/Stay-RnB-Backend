const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);
const PORT = process.env.PORT || 3001;
const routes = require(`./controllers`);
const MongoStore = require("connect-mongo");
const path = require("path");
const app = express();
const session = require("express-session");
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI || `mongodb://localhost/Stay_RnB`,
  }),
};

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/Stay_RnB`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use(session(sess));
app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));
app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}.`);
});
