const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 8000
var fs = require('fs');
var path = require('path');

const bodyParser = require('body-parser')
require('dotenv/config');

app.use(bodyParser.json())

const postRoute = require('./controller/routes')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/', require('./controller/routes'))

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// const brawlers = {
//     'frank':{
//         'brawlerName': 'Frank',
//         'health': 7000,
//         'attDmg': 1240,
//         'attRange': 6,
//         'reloadSpeed': '.8s',
//         'moveSpeed': 770
//     },
//     'el primo':{
//         'health': 6000,
//         'attDmg': 1440,
//         'attRange': 3,
//         'reloadSpeed': '.8s',
//         'moveSpeed': 770
//     },
//     'unknown':{
//         'health': 0,
//         'attDmg': 'unknown',
//         'attRange': 'unknown',
//         'reloadSpeed': 'unknown',
//         'moveSpeed': 'unknown'
//     } 
// }

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    (err) => {
        if(err){
            console.log(err)
        }else{
            console.log('Really connected to DB!')
        }
    });

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.use('/routes', postRoute)

// app.get('/api/:name',(request,response)=>{
//     const brawlerName = request.params.name.toLowerCase()
//     if(brawlers[brawlerName]){
//         response.json(brawlers[brawlerName])
//     }else{
//         response.json(rappers['unknown'])
//     }

// })

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Time to Brawl!`)
})