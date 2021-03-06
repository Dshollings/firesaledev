var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/index.html"));
  });

  app.get("/addshop", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/addshop.html"));
  });

  app.get("/myshop/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/myshop.html"));
  });
}

