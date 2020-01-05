const orm = require("../config/orm.js");

const burgers = {
    selectAll: (callback) => {
        orm.selectAll("burgers", (res) => {
            callback(res);
        });
    },
    insert: (burgerNAme, devoured, callback) => {

        console.log("burgers.insert HIT");

        orm.insertOne("burgers", "burger_name", "devoured", burgerNAme, devoured, (res) => {
            callback(res);
        });
    },
    update: (id, devoured, callback) => {
        orm.updateOne("burgers", "devoured", devoured, "id", id, (res) => {
            // console.log("burgers.update HIT");
            callback(res);
        });
    },
    delete: (id, callback) => {
        orm.delete("burgers", "id", id, (res) => {
            callback(res);
        });
    }
};

module.exports = burgers;