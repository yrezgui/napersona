require('babel/register');

var express = require('express');
var React   = require('react');
var Router  = require('react-router');

var routes  = require('./src/routes');
var app     = express();
var yaml    = require('js-yaml');
var fs      = require('fs');

var general   = yaml.safeLoad(fs.readFileSync('config/general.yaml', 'utf8'));
var links     = yaml.safeLoad(fs.readFileSync('config/links.yaml', 'utf8'));
var jobs      = yaml.safeLoad(fs.readFileSync('config/jobs.yaml', 'utf8'));
var projects  = yaml.safeLoad(fs.readFileSync('config/projects.yaml', 'utf8'));

var config = {
  projects: projects,
  general: general,
  links: links,
  jobs: jobs
};

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