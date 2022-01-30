const express= require('express');
const router=express.Router();
const Url = require('../models/url.model');
const shortid=require('shortid');

router.post("/",async function(req, res){
    const {short_url,long_url} = req.body;
    if(short_url){
        const url=await Url.findOne({short_url:short_url}).lean().exec();

        if(url){
            console.log(url);
            res.status(424).send("Url already exist");
        }else{
            const new_url=await Url.create(req.body);
            res.status(200).send(new_url);
        }
    }else{
        const id=shortid.generate();
        let body={
            short_url:id,
            long_url:long_url,
        }
        const new_url=await Url.create(body);
        res.status(200).send(JSON.stringify(new_url));
    }
})

router.get('/',async function(req, res){
    const url=await Url.find().lean().exec();
    res.send(url);
})

router.get("/:getone",async function(req, res){
    let url=await Url.findOneAndUpdate({short_url:req.params.getone},{ $inc: { times: 1 }},{new:true});
    console.log(url);
    res.send(url);
})

module.exports =router;