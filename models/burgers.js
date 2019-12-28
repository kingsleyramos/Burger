const orm = require("../config/orm.js");

const burgers = {
    selectAll: function() {
        orm.selectAll();
    },
    insert: function(burgerNAme, devoured) {
        orm.insertOne("burgers", "burger_name", "devoured", burgerNAme, devoured);
    },
    update: function(burgerNAme, updateDevoured) {
        orm.updateOne("burgers", "devoured", updateDevoured, "burger_name", burgerNAme);
    }
};

module.exports = burgers;