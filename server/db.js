'use strict'
const mongoose = require('mongoose');
require('dotenv').config()
const dbUri = process.env.DATABASEURI;


const db = mongoose.connect(dbUri);

const playerSchema = new mongoose.Schema({
  id: Number,
  team_id: Number,
  player_name: String,
  first_name: String,
  last_name: String,
  birth_date: Number,
  position: String,
  dk_position: String,
  dk_id: Number
});

const Player = mongoose.model('Player', playerSchema);

module.exports = {
  db: db,
  Player: Player
};
