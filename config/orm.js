const connection = require("./connection.js");

const orm = {
    selectAll: function(tableInput, callback) {
        const queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableInput], function(err, result) {
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
    updateOne: function(tableInput, setCol, setColVal, whereCol, whereColVal, callback) {
        const queryString = `UPDATE ${tableInput} SET ${setCol} = ${setColVal} WHERE ${whereCol} = ${whereColVal}`;
        // console.log(tableInput);
        // console.log(setCol);
        // console.log(setColVal);
        // console.log(whereCol);
        // console.log(whereColVal);
        connection.query(queryString, function(err, result) {
            //console.log(result);
            console.log("orm.updateOne HIT");
            if (err) throw err;
            callback(result);
        }
        );
    }
};

module.exports = orm;