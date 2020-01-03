const orm = require("../config/orm.js");

const burgers = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    insert: function(burgerNAme, devoured, callback) {

        console.log("burgers.insert HIT");

        orm.insertOne("burgers", "burger_name", "devoured", burgerNAme, devoured, function(res){
            callback(res);
        });
    },
    update: function(id, devoured, callback) {
        orm.updateOne("burgers", "devoured", devoured, "id", id, function(res){
            // console.log("burgers.update HIT");
            callback(res);
        });
    },
    delete: function(id, callback){
        orm.delete("burgers", "id", id, function(res){
            callback(res);
        });
    }
};

module.exports = burgers;