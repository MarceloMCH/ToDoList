const { get } = require("http");

const getALl = (req, res) => {
  return res.render("index");
};

module.exports = {
    getALl,
};
