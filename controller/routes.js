const express = require("express");
const router = express.Router()
const Brawlstar = require('../model/models')

router.get('/', (req,res)=>{
    res.send('We are on routes!')
})git


router.get('/api/brawler', (req,res)=>{
    res.send('We are on api/brawler!')
})

router.post('/api/brawler', (req,res)=>{

    const brawler = new Brawlstar({
        brawlerName:req.body.brawlerName,
        health:req.body.health,
        attDmg:req.body.attDmg,
        attRange:req.body.attRange,
        reloadSpeed:req.body.reloadSpeed,
        moveSpeed:req.body.moveSpeed
    })

    brawler
    .save(brawler)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Some error occured while creating a create operation"
        })
    })
});


module.exports = router;

