const service = require("./sequencer.service");

async function list(req, res, next) {
  try {
    const presets = await service.list();
    res.json({ data: presets });
  } catch (err) {
    next(err);
  }
}
async function create(req, res, next) {
  try {
    const { data } = req.body;
    const preset = await service.create(data);
    console.log(preset);
    res.json({ data: preset });
  } catch (err) {
    next(err);
  }
}
async function read(req, res, next) {}
async function update(req, res, next) {}
async function destroy(req, res, next) {}

async function generateRandomPreset(req, res, next) {
  res.json({ data: await service.generateRandomPreset() });
}

module.exports = {
  list,
  create,
  read,
  update,
  generateRandomPreset,
  delete: [destroy],
};
