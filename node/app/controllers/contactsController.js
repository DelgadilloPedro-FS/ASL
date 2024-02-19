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
const Pager = require("@jworkman-fs/asl/src/Util/Pager");
const validOperators = require("../CONSTANTS/OPERATORS");

const getContacts = (req, res) => {
  const { page, size, sort, direction, limit } = req.query;
  const filterBy = req.headers["x-filter-by"];
  const filterOperator = req.headers["x-filter-operator"];
  const filterValue = req.headers["x-filter-value"];

  const sizeOrLimit = limit ? limit : size;

  try {
    if (sizeOrLimit > 20) {
      throw new PagerLimitExceededError("The limit per page cannot exceed 20.");
    }
    if (direction && direction !== "asc" && direction !== "desc") {
      throw new InvalidEnumError(
        `${direction} is not a valid direction. Valid directions are asc and desc.`
      );
    }

    if (filterOperator && !validOperators.includes(filterOperator)) {
      throw new InvalidOperatorError(
        `${filterOperator} is not a valid operator. Valid operators are eq, gt, gte, lt or lte.`
      );
    }
    const filteredData = filterContacts(
      filterBy,
      filterOperator,
      filterValue,
      DATA
    );
    const sortedData = sortContacts(
      filteredData,
      sort ? sort : "id",
      direction ? direction : "asc"
    );
    const pager = new Pager(sortedData, page ? page : 1, sizeOrLimit);
    res.set("X-Page-Total", pager.pages);
    res.set("X-Page-Next", pager.next());
    res.set("X-Page-Prev", pager.prev());
    res.status(200).json(pager.results());
  } catch (err) {
    errorHandling(err, res);
  }
};
const getContactById = (req, res) => {
  const { id } = req.params;
  const contact = ContactModel.show(id);
  res.status(200).json(contact);
};
const createContact = (req, res) => {
  const { body } = req;
  validateContactData(body);
  const newContact = ContactModel.create(body);
  res.set("Location", `/v1/contacts/${newContact.id}`);
  res.status(303).json(newContact);
};
const updateContact = (req, res) => {
  res.status(200).json(DATA);
};
const deleteContact = (req, res) => {
  res.status(200).json(DATA);
};

const errorHandling = (err, res) => {
  console.log(err);
  const message = err.message
    ? err.message
    : "A bad request was received. There might be an invalid value in the request.";
  res.status(err.statusCode ? err.statusCode : 400).json({ message });
};

module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
