const Validator = require('validator');

module.exports = function validateList(data) {
  let errors = {};

  if (Validator.isEmpty(data.movie)) {  //movie is an array so cannnot use the isEmpty
    errors.watchlist = "There are no movies yet."
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
