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
  projects:  [{
              type: mongoose.Schema.ObjectId,
              ref: 'Project'
              }]
});

module.exports = mongoose.model('Person', personSchema);