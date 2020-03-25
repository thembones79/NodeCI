const { clearHash } = require("../services/cache");

module.exports = async (req, res, next) => {
  //  trick to run route handler before middleware
  await next();
  clearHash(req.user.id);
};
