var yaml    = require('js-yaml');
var marked  = require('marked');
var fs      = require('fs');

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

module.exports = config;