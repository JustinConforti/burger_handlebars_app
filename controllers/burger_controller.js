var express = require("express");
var router = express.Router()
var burger = require('../models/burger.js');


router.get('/', function(req,res){
    burger.all(function(data){
        console.log(data)
        var handlebarObj = {
            burgers:data
        };
        res.render('index', handlebarObj)
    })
})

router.post('/', function(req,resp){
    var name = req.body.burger_name
    var devoured = req.body.devoured = false
    console.log(name)
    console.log(devoured)
    burger.create(
        name,devoured,
        function(data){
            console.log('burger added')

        })
        resp.redirect('/')
})

router.delete('/delete', function(req,resp){
    burger.delete(req.body.id,function(result){
        resp.status(200).end()
    })
})

router.put('/update',function(req,resp){
    burger.update(req.body.id,function(result){
        resp.status(200).end()
    })
})
module.exports= router;