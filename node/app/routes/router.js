const express = require("express");
const router = express.Router();
const contact = require("./contactsRouter")

router.use("/contacts", contact)

module.exports = router;