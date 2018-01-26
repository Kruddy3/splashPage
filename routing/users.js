const models = require('../models');
const _ = require('lodash');
const path = require('path');


module.exports = function (app) {
  app.get('/users', (req, res) => {
    res.sendFile(path.join(`${__dirname}/index.html`));
  });

  app.post('/users', (req, res) => {
    const data = req.body;
    console.log(req);

    models.users.create(data).then((post) => {
      //success
      res.send('zuccess')
    }, (err) => {
      res.json(_.map(err.errors, 'message'));
      // res.send(500, response)
      
      res.json(err);
    });
  });
};
