// Dependencies
const express = require("express");
const router = express.Router();
const burgers = require("../models/burgers");



// Get Route - Receive all burgers from database
router.get("/", (req, res) => {

    // returns all burgers from database to index.handlebars
    burgers.selectAll((data) => {
      res.render("index", { hamburgers: data });
    });
});
  
// Post Route - Add new burger to the database
router.post("/api/hamburger", (req, res) => {

  // Inserts hamburger to db
  burgers.insert(req.body.name, false, (result) => {
    // Returns response for ajax call
    if (result.changedRows == 1) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Put Route - Updates hamburger to devoured
router.put("/api/hamburger/:id", (req, res) => {

  const id = req.params.id;

  // Update hamburger in db
  burgers.update(id, true, (result) => {
    // Returns response for ajax call
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Delete Route - Delete hamburger from db
router.delete("/api/hamburger/:id", (req, res) => {
  const id = req.params.id;
  
  // Deletes selected hamburger
  burgers.delete(id, (result) => {
    // Returns response for ajax call
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
  
// Export routes for server.js to use.
module.exports = router;
   