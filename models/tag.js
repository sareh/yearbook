var mongoose = require('mongoose');

var tagSchema = new mongoose.Schema({
  name: {type: String, unique: true, required: true},
  projects:  [{
              type: mongoose.Schema.ObjectId,
              ref: 'Project'
              }]
});

module.exports = mongoose.model('Tag', tagSchema);