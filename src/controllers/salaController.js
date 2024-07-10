const salaModel = require('../models/salaModel');//..volta uma pasta

exports.get = async() => {
    return await listarSalas();
}