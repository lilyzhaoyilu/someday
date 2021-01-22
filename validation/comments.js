const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateComment(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 1, max: 144 })) {
    errors.text = 'Comments must be between 1 and 144 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Comment can not be empty.'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}