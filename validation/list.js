const Validator = require('validator');

module.exports = function validateList(data) {
  let errors = {};

  if(Validator.isEmpty(data.movie)) {
    errors.watchlist = "There are no movies yet."
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
