const express = require("express");
const router = express.Router();
const favoriteControllers = require('../controllers/favoritesControllers');

router.route("/add").post(favoriteControllers.addToFavorites);
router.route("/:userId").get(favoriteControllers.getFavorites);
router.route("/delete").delete(favoriteControllers.deleteFavorite);

module.exports = router;