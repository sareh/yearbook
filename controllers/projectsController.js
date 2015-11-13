var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
  title:      String,
  github:     String,
  heroku:     String,
  screenshot: String,
});

module.exports = mongoose.model('Project', projectSchema);