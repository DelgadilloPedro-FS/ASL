const express = require("express");
const router = express.Router();
const contact = require("./contactsRouter")

router.use("/", contact)

module.exports = router;