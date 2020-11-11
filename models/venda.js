const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendaSchema = new Schema({
  data: {
    type: Date,
    required: true
  },
  cliente: {
    type: Schema.Types.ObjectId,
    ref: 'cliente',
    required: true
  },
  vendedor: {
    type: Schema.Types.ObjectId,
    ref: 'vendedor',
    required: true
    },
    itens: [{
      //nome: { type: String, required: true },
      descricao: String,
      data: { type: Date, required: true },
      produto: { 
        type: Schema.Types.ObjectId, 
        ref: 'produto',
        required: false 
      },
      preco: { type: Number, required: true },
      quantidade: { type: Number, default: 1 },
      vendido: { type: Boolean, required: true, default: false },
      total: { type: Number, required: true }
    }],
    totalVendido: Number,
    total: Number
  }, { timestamps: true });
const venda = mongoose.model('vendas', vendaSchema);

module.exports = venda;