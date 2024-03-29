const express = require('express');
const cors = require('cors');
const routes  = require('./config/router');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routes);

app.listen(port);