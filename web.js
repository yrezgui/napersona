require('babel/register');

var Router  = require('react-router');
var routes  = require('./src/routes');
var express = require('express');
var yaml    = require('js-yaml');
var marked  = require('marked');
var React   = require('react');
var fs      = require('fs');
var app     = express();

function loadYaml (file) {
  return yaml.safeLoad(fs.readFileSync(file, 'utf8'));
}

function loadMarkdown (file) {
  return marked(fs.readFileSync(file, 'utf8'));
}

var general   = loadYaml('config/general.yaml');
var social    = loadYaml('config/social.yaml');
var header    = loadYaml('config/header.yaml');
var resume    = loadYaml('config/resume.yaml');
var projects  = loadYaml('config/projects.yaml');
var me        = loadMarkdown('config/me.md');

var config = {
  projects: projects,
  general: general,
  header: header,
  social: social,
  resume: resume,
  me: me
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