const knex = require("../db/connection");

function list() {
  console.log("list all synth presets");
  return knex("synth_presets").select();
}

function create(preset) {
  return knex("synth_presets")
    .insert(preset)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

module.exports = {
  list,
  create,
};
