const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    brawlerName: String,
    health: String,
    attDmg: String,
    attRange: String,
    reloadSpeed: String,
    moveSpeed: String
});

const Brawlstar = mongoose.model("brawlstar", schema);

module.exports = Brawlstar;

