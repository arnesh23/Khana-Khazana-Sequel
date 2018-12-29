var express = require("express");
var router = express.Router();

var khana = require("../models/Khana-Khazana.js")


router.get("/", function(req,res){
khana.selectAll(function(data){
    var hbsObject = {
        khana: data
    };
    console.log("all khanas");
    console.log(hbsObject);
    
    res.render("index", hbsObject);
});
});


router.post("/api/khana", function(req,res){
    console.log("POST Called!");
    console.log(req.body.khana);
khana.insertOne(req.body.khana, function(result){
    res.json({ID: result.insertId});
})
})


router.put("/api/khana/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    khana.updateOne(req.params.id,function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    })
  });

  router.delete("/api/khana/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("deltecondition", condition);
  
    khana.deleteOne(req.params.id,function(result){
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
  });
})



module.exports = router;