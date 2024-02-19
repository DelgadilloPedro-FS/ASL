const DATA = require("@jworkman-fs/asl/src/Data/contacts");


const getAllContacts = (req,res) =>{
    res.status(200).json(DATA)
}
const getContactById = (req,res) =>{
    res.status(200).json(DATA)
}
const createContact = (req,res) =>{
    res.status(200).json(DATA)
}
const updateContact = (req,res) =>{
    res.status(200).json(DATA)
}
const deleteContact = (req,res) =>{
    res.status(200).json(DATA)
}


module.exports = { getAllContacts, getContactById, createContact, updateContact, deleteContact };