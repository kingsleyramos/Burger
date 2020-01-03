const express = require("express");
const router = express.Router();

const burgers = require("../models/burgers");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
      //console.log("router.get");

      burgers.selectAll(function(data) {

        //console.log(data);
        // res.json({ hamburgers: data });
        return res.render("index", { hamburgers: data });
      });
});
  
  router.post("/api/cats", function(req, res) {
    // cat.create([
    //   "name", "sleepy"
    // ], [
    //   req.body.name, req.body.sleepy
    // ], function(result) {
    //   // Send back the ID of the new quote
    //   res.json({ id: result.insertId });
    // });
});
  
  router.put("/api/hamburger/:id", function(req, res) {
    const id = req.params.id;
  
    burgers.update(id, true, function(result){

      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});
  
  router.delete("/api/cats/:id", function(req, res) {
    // var condition = "id = " + req.params.id;
  
    // cat.delete(condition, function(result) {
    //   if (result.affectedRows == 0) {
    //     // If no rows were changed, then the ID must not exist, so 404
    //     return res.status(404).end();
    //   } else {
    //     res.status(200).end();
    //   }
    // });
});
  
  // Export routes for server.js to use.
  module.exports = router;
  