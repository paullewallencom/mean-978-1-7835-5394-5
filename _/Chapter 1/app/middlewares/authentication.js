'use strict';

module.exports.ensured = function ensureAuthenticated(req, res, next) {
  return next();

  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).send({
    message: 'Please authenticate.'
  });
};
