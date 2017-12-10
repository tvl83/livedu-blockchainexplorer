const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')({origin: true});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

module.exports = app;
