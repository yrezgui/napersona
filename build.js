require('babel/register');

var Router  = require('react-router');
var routes  = require('./src/routes');
var React   = require('react');
var config  = require('./config');
var path    = require('path');
var fs      = require('fs');

function getContent(url, callback) {
  var router = Router.create({
    location: url || '/resume',
    routes: routes
  });

  router.run(function(Handler, state) {
    var html = React.renderToStaticMarkup(React.createElement(Handler, {
      config: config
    }));

    callback(html);
  });
}

var urls = [
  '',
  'me',
  'resume'
];

urls.forEach(function (url) {
  var filename = url ? url + '.html' : 'index.html';
  var fullpath = path.join(__dirname, 'dist', filename);

  getContent('/' + url, function getConentCallback (content) {
    fs.writeFile(fullpath, content, function writeFileCallback (err) {
      if (err) {
        return console.log(err);
      }

      console.log(fullpath + ' written');
    });
  });
});