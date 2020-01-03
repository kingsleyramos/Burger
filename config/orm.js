const connection = require("./connection.js");

const orm = {
    selectAll: function(tableInput, callback) {
        const queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function(tableInput, colOneInput, colTwoInput, colOneValue, colTwoValue, callback) {
        const queryString = `INSERT INTO ${tableInput} (${colOneInput}, ${colTwoInput}) VALUES ('${colOneValue}', ${colTwoValue})`;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: function(tableInput, setCol, setColVal, whereCol, whereColVal, callback) {
        const queryString = `UPDATE ${tableInput} SET ${setCol} = ${setColVal} WHERE ${whereCol} = ${whereColVal}`;
        connection.query(queryString, function(err, result) {
            console.log("orm.updateOne HIT");
            if (err) throw err;
            callback(result);
        });
    },
    delete: function(tableInput, whereCol, whereColVal, callback){
        const queryString = `DELETE FROM ${tableInput} WHERE ${whereCol} = ${whereColVal}`;
        connection.query(queryString, function(err, result){
            console.log("orm.delete HIT");
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;