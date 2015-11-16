var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
  title:      String,
  github:     String,
  heroku:     String,
  screenshot: String,
  // creators:  [{
  //             type: mongoose.Schema.ObjectId,
  //             ref: 'Person'
  //             }],
  tags:      [{
              type: mongoose.Schema.ObjectId,
              ref: 'Tag'
              }]
});

module.exports = mongoose.model('Project', projectSchema);