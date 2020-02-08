// const mysql = require("mysql");
var db = require("../modules");

module.exports = function(app) {
    app.get('/', function(req, res) {
        // connection.query("SELECT * FROM users", function(err, data) {
        //     (err)?res.send(err):res.json({user: data});
  //      });

    });
    app.post("/api/postQuickup", function(req, res) {
      console.log(req.body.tempData);
    db.postQuickup.create(req.body.tempData).then(function(dbpostQuickup) {
      res.json(dbpostQuickup);

    });
  });
    

};