const DATA = require("@jworkman-fs/asl/src/Data/contacts");
const {
  InvalidEnumError,
  InvalidOperatorError,
  InvalidContactResourceError,
  DuplicateContactResourceError,
  InvalidContactSchemaError,
} = require("@jworkman-fs/asl/src/Exception/index");
const {
  sortContacts,
  filterContacts,
  ContactModel,
  validateContactData,
} = require("@jworkman-fs/asl/src/index");

const getAllContacts = (req, res) => {
  res.status(200).json(DATA);
};
const getContactById = (req, res) => {
  const { id } = req.params;
  const contact = ContactModel.show(id);
  res.status(200).json(contact);
};
const createContact = (req, res) => {
  res.status(200).json(DATA);
};
const updateContact = (req, res) => {
  res.status(200).json(DATA);
};
const deleteContact = (req, res) => {
  const { id } = req.params;
  const contact = ContactModel.show(id);
  ContactModel.remove(id);
  res.json({
    message: `Contact ${contact.fname} deleted successfully`,
    contact,
  });
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
