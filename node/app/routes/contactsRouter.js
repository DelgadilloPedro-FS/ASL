const express = require("express");
const { getAllContacts, getContactById, createContact, updateContact, deleteContact } = require("../controllers/contactsController");
const contactsRouter = express();

outer.get("/", getAllContacts);
router.post("/", createContact);
router.get("/:id", getContactById);
router.delete("/:id", deleteContact);
router.put("/:id", updateContact);

module.exports = contactsRouter;