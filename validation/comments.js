const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateComment(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : '';

  if(!Validator.isLength(data.text, {min: 5, max: 140})) {
    errors.text = 'Comments must be between 5 and 140 characters';
  }

  if(Validator.isEmpty(data.text)) {
    errors.text = 'Comment can not be empty.'
  }

  return {
    errors,
    isValid: ObjectObject.keys(errors).length === 0
  }
}