require('babel/register');

var Router  = require('react-router');
var routes  = require('./src/routes');
var express = require('express');
var React   = require('react');
var config  = require('./config');
var app     = express();

app.use(express.static(__dirname + '/dist'));

app.use(function(req, res, next) {
  var router = Router.create({
    location: req.url,
    routes: routes
  });

  router.run(function(Handler, state) {
    var html = React.renderToStaticMarkup(React.createElement(Handler, {
      config: config
    }));
    return res.send(html);
  });
});

var server = app.listen(3210, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});