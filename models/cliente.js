const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  documento: String,
    
  nome: {
      type: String,
      required: true
  },
  rua: {
      type: String,
      required: true
  },
  cidade: {
      type: String,
      required: true
  },
  bairro: {
      type: String,
      required: true
  },
  telefone: {
      type: String,
      required: true
  },
  celular: {
      type: String,
      required: true
  },
  email: String,
  observacao: String   
}, {timestamps: true});

const cliente = mongoose.model('clientes', clienteSchema);

module.exports = cliente;
