// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var home = require("../controllers/Khana-Khazana_controller.js")

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
    console.log("????////");
    // findAll returns all entries for a table when used with no options
    db.Khana.findAll({}).then(function(dbKhana) {
      // We have access to the todos as an argument inside of the callback function
      console.log(dbKhana);
      res.json(dbKhana);
      console.log(res);

      home.renderHome(res,dbKhana);
      console.log("done rendering!");
      
    });
  });

  // POST route for saving a new todo
  app.post("/api/khana", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    console.log(req.body.khana);
    db.Khana.create({
      
      khana_name: req.body.khana,
    }).then(function(dbkhana) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbkhana);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/khana/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    console.log("DELETE");
    db.Khana.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/khana/:id", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Khana.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbKhana) {
      res.json(dbKhana);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
};
