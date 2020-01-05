const connection = require("./connection.js");

const orm = {
    selectAll: (tableInput, callback) => {
        const queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: (tableInput, colOneInput, colTwoInput, colOneValue, colTwoValue, callback) => {
        const queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        
        //`INSERT INTO ${tableInput} (${colOneInput}, ${colTwoInput}) VALUES ('${colOneValue}', ${colTwoValue})`;

        // "INSERT INTO ?? (??, ??) VALUES (?, ?)"
        // [tableInput, colOneInput, colTwoInput, colOneValue, colTwoValue]

        connection.query(queryString, [tableInput, colOneInput, colTwoInput, colOneValue, colTwoValue], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: (tableInput, setCol, setColVal, whereCol, whereColVal, callback) => {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

        // `UPDATE ${tableInput} SET ${setCol} = ${setColVal} WHERE ${whereCol} = ${whereColVal}`
        //[tableInput, setCol, setColVal, whereCol, whereColVal]

        connection.query(queryString, [tableInput, setCol, setColVal, whereCol, whereColVal], (err, result) => {
            console.log("orm.updateOne HIT");
            if (err) throw err;
            callback(result);
        });
    },
    delete: (tableInput, whereCol, whereColVal, callback) => {
        const queryString = "DELETE FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, whereCol, whereColVal], (err, result) => {
            console.log("orm.delete HIT");
            if (err) throw err;
            callback(result);
        });
    }
};


module.exports = orm;