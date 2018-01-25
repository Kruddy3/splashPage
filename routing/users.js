const models = require('../models');
const _ =require('lodash')
var path = require('path');


module.exports = function (app) {

  app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
  });

  app.post('/users', (req, res) => {
    const data = req.body;
    models.users.create(data).then((post) => {
      console.log(req)
      res.send(JSON.stringify(req.body, null, 2));
    }, function(err) {
      res.json(_.map(err.errors, "message"))

      res.json(err)
    });

  });
};
