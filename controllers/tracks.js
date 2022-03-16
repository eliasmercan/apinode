const {tracksModel} = require("../models");

const getItems = async(req, res) =>{
    const data = await tracksModel.find({});
    res.send({data})
};
const getItem = (req, res) =>{};
const createItem = (req, res) =>{};
const updateItem = (req, res) =>{};
const deleteItem = (req, res) =>{};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem}