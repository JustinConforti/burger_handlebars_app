var connection = require("../config/connection")

var orm = {
    selectAll: function(table,cb){
        var query='SELECT * FROM ' + table +';';
        connection.query(query,function(err,resp){
            if (err) throw err
            cb(resp)
        })
    },
    insertOne: function(burger_name,devoured,cb){
        var query='INSERT INTO burgers (burger_name,devoured) VALUES (?,?)'
        connection.query(query,[burger_name, devoured], function(err,resp){
            console.log(resp + 'object from query')
            if (err) throw err
            cb(resp)
        })
    },
    updateOne: function(id,cb){
        var query='UPDATE burgers SET devoured =1 WHERE ID = ?'

        connection.query(query,[id], function(err,result){
            if (err) throw err

            cb(result)
        })
    },
    deleteOne:function(id,cb) {
        var query='DELETE FROM burgers WHERE ID = ?'

        connection.query(query,[id], function(err, resp){
            if (err) throw err

            cb(resp)
        })
    }
}

module.exports = orm;