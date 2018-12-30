// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db  = require('../models');
var express = require('express');
var router  = express.Router();

module.exports = function(app) {

app.get('/', function(req, res) {
  db.Khana.findAll({}).then(function(dbkhana) {
    res.render("index", {khana: dbkhana
    });
  });
});

// Routes
// =============================================================

  // POST route for saving a new todo
  app.post("/api/khana", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    console.log(req.body.khana);
    db.Khana.create({
      
      khana_name: req.body.khana,
    }).then(function(dbkhana) {
      console.log(saofjaodfjasfjas);
      // We have access to the new todo as an argument inside of the callback function
      console.log("khana"+dbKhana);
      res.json(dbkhana);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });


  app.post("/api/customer/:id", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    console.log("req.body."+req.body.customer);
    db.Customer.create({
      id: req.params.id,
      customer_name: req.body.customer,
    }).then(function(dbCustomer) {
      console.log(saofjaodfjasfjas);
      // We have access to the new todo as an argument inside of the callback function
      console.log("Customer"+dbKhana);
      res.json(dbCustomer);
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
    console.log("calling")

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

