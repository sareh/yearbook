var mongoose = require('mongoose');

var projectSchema = require('./project');

var personSchema = new mongoose.Schema({
  first_name: String,
  last_name:  String,
  nickname:   String,
  photo:      String,
  github:     String,
  linkedin:   String,
  twitter:    String,
  role:       String,
  projects:  [projectSchema]
});

module.exports = mongoose.model('Person', personSchema);