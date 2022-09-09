const knex = require("../db/connection");

const generateRandomGrid = () => {
  const grid = [];
  for (let i = 0; i < 256; i++) {
    const randomBoolean = () => Math.random() >= 0.5;
    grid.push({
      isActive: randomBoolean(),
    });
  }
  return grid;
};

function generateRandomPreset() {
  return generateRandomGrid();
}

function list() {
  return knex("sequencer_presets").select();
}

function create(preset) {
  // console.log(preset);

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

// function read(id) {
//     return knex("movies").select("*").where({ movie_id: id }).first();
//   }
