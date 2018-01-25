const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());

const routeHandler = require('./routing/users.js');

app.use(express.static('public'));
routeHandler(app);

app.listen(3000);
