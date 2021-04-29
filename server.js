const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);
const path = require(`path`);
const PORT = process.env.PORT || 3001;
const routes = require(`./controllers`);

const app = express();

const session = require('express-session');
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
};
app.use(session(sess));

app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));
app.use(routes);

mongoose.connect(`mongodb://localhost/Stay_RnB`, { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}.`)
});