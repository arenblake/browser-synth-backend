const router = require("express").Router();
const controller = require("./sequencer.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/random")
  .get(controller.generateRandomPreset)
  .all(methodNotAllowed);

// TODO: add post method
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

// TODO: add update and delete methods
router
  .route("/:presetId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

module.exports = router;
