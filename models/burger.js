var orm = require('../config/orm.js')

var burger = {
    all:function(cb){
        orm.selectAll("burgers",cb,function(res){
            cb(res)
        })
    },

    create: function(burger_name,devoured,cb){
        orm.insertOne(burger_name,devoured,function(res){
            cb(res)
        })
    },

    update:function(id,cb){
        orm.updateOne('burgers',id,cb), function(res){
            cb(res)
        }
    },

    delete:function(id,cb){
        orm.deleteOne('burgers',id,cb,function(res){
            cb(res)
        })
    }
}


module.exports = burger;