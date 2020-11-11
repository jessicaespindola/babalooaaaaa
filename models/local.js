const mongoose = require('mongoose');

const localSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  }
}, {timestamps: true});

const local = mongoose.model('locais', localSchema);

module.exports = local;
