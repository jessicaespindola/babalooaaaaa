const mongoose = require('mongoose');

const vendedorSchema = new mongoose.Schema({
    documento: String,
    nome: {
        type: String,
        required: true
    },
    telefone: String,
    email: String,
    endereco: String,
    comissao: String,
    observacao: String
}, {timestamps: true});
const vendedor = mongoose.model('vendedores', vendedorSchema);

module.exports = vendedor;
