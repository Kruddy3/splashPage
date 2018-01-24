const models = require('../models');
const _ =require('lodash')

module.exports = function (app) {
  app.post('/users', (req, res) => {
    const data = req.body;
    models.users.create(data).then((post) => {
      res.send(JSON.stringify(req.body, null, 2));
    }, function(err) {
      res.json(_.map(err.errors, "message"))

      res.json(err)
    });

  });
};
