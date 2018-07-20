const router = require("express").Router();
const memeController = require("../../controllers/memeController");

router.route("/")
    .get(memeController.findFresh)
    .post(memeController.findFresh);

router.route("/fresh")
    .get(memeController.findFresh)
    .post(memeController.findFresh);

router.route("/dank")
    .get(memeController.findDank);

router.route("/search")
    .get(memeController.findByTag)
    .post(memeController.findByTag);

router.route("/user")
    .get(memeController.findByUser)
    .post(memeController.findByUser);

router.route("/upload")
    .post(memeController.create);

module.exports = router; 