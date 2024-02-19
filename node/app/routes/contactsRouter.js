const express = require("express");
const { getContacts, getContactById, createContact, updateContact, deleteContact } = require("../controllers/contactsController");
const contactsRouter = express();

contactsRouter.get("/", getContacts);
contactsRouter.post("/", createContact);
contactsRouter.get("/:id", getContactById);
contactsRouter.delete("/:id", deleteContact);
contactsRouter.put("/:id", updateContact);

module.exports = contactsRouter;