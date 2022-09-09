const knex = require("../db/connection");

function list() {
  return knex("sequencer_presets").select();
}

function create(preset) {
  return knex("sequencer_presets")
    .insert(preset)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

module.exports = {
  list,
  create,
  generateRandomPreset,
};
