const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
cont routes = require('./routes');
const logger = require('morgan');

let db = require('./models');

let PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/build'));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI
);

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.once('open', () => {
    console.log('Successfully connected to MongoDB');
});

var cors = require('cors');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors());

app.use(routes);

app.listen(PORT, () => {
    console.log('Now listening on PORT: ', PORT);
});