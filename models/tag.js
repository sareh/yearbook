var mongoose = require('mongoose');

var tagSchema = new mongoose.Schema({
  name: String,
  projects:  [{
              type: mongoose.Schema.ObjectId,
              ref: 'Project'
              }]
});

module.exports = mongoose.model('Tag', tagSchema);