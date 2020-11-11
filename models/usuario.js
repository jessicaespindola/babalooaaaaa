const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  inscricao: {
    type: String,
    required: true
  },
  celular:  {
    type: String,
    required: true
  },
  telefone: String,
  email: {
    type: String,
    required: true
  }
}, {timestamps: true});

const usuario = mongoose.model('usuarios', usuarioSchema);

module.exports = usuario;
