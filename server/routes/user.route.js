const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();

router.post("/create/user", userController.create);
router.get("/users", userController.getAll);
router.get("/user/:id", userController.getUserById);
router.put("/update/user/:id", userController.update);
router.delete("/delete/user/:id", userController.delete);

module.exports = router;
