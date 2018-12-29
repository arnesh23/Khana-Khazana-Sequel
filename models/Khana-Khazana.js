var orm = require("../config/orm.js")

var khana = {
    selectAll: function(cb){
        orm.selectAll("Khana",function(res){
            cb(res);
        });
    },
    insertOne: function(khana,cb){
        orm.insertOne("Khana", khana, function(res){
            cb(res);
        })
    },
    updateOne: function(khana,id,cb){
        orm.updateOne("Khana", khana,id,function(res){
            cb(res);
        } 
    )
    },
    deleteOne: function(id,cb){
        orm.deleteOne("Khana",id, function(res){
            cb(res);
        })
    }
}

module.exports = khana;