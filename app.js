const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());

const routeHandler = require('./routing/users.js');

app.use(express.static('public'));
app.use('/jquery', express.static(`${__dirname}/node_modules/jquery/dist/`));


routeHandler(app);

app.listen(3000);
