const orm = require("../config/orm.js");

const burgers = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    insert: function(burgerNAme, devoured) {
        orm.insertOne("burgers", "burger_name", "devoured", burgerNAme, devoured);
    },
    update: function(id, devoured, callback) {
        orm.updateOne("burgers", "devoured", devoured, "id", id, function(res){
            // console.log("burgers.update HIT");
            callback(res);
        }
        );
    }
};

module.exports = burgers;