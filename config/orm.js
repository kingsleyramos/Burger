const connection = require("./connection.js");

const orm = {
    selectAll: function(tableInput, callback) {
        const queryString = "SELECT * FROM " + tableInput;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function(tableInput, colOneInput, colTwoInput, colOneValue, colTwoValue) {
        const queryString = "INSERT INTO ?? (??, ??) VALUES ('??', ??)";

        connection.query(queryString, [tableInput, colOneInput, colTwoInput, colOneValue, colTwoValue], function(err, result) {
            if (err) throw err;
            return result;
        });
    },
    updateOne: function(tableInput, setCol, setColVal, whereCol, whereColVal) {
        const queryString = "UPDATE ?? SET ?? = ?? WHERE ?? = ?";

        connection.query(queryString, [tableInput, setCol, setColVal, whereCol, whereColVal], function(err, result) {
            if (err) throw err;
            return result;
        });
    }
};

module.exports = orm;