const { storageModel } = require("../models");

/**
 * Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 */

async function getItems(req, res) {
    const data = await storageModel.find({});
    res.send({ data });
}
const getItem = (req, res) =>{};

const createItem = async(req, res) => {
    const { body } = req
    console.log(body)
    const data = await storageModel.create(body)
    res.send({data})
};

const updateItem = (req, res) =>{};
const deleteItem = (req, res) =>{};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem}