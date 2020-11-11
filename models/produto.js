const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produtoSchema = new Schema({
  referencia: Number,
    quantidade: {
        type: Number,
        required: true
    } ,
    codigo: String,
    descricao: {
        type: String,
        required: true
    },
    precoCusto: Number,
    quantidade: {
        type: Number,
        required: true
    } ,
    precoVenda: Number,
    quantidade: {
        type: Number,
        required: true
    },
    lucro: Number,
    quantidade: {
        type: Number,
        required: true
    },
    tamanho: {
        type: String,
        required: false
    },
    categoria: {
        type: String,
        required: false
    },
    fornecedor: {
        type: Schema.Types.ObjectId,
        ref: 'fornecedor',
        required: false
    }
   }, { timestamps: true });
const produto = mongoose.model('produtos', produtoSchema);

module.exports = produto;