const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estoqueSchema = new Schema({
  dataTransacao: {
    type: Date,
    required: true
  },
  quantidadeItens: Number,
  totalProdutos: Number,
    itens: [{
        dataTransacao: { type: Date, required: true },
      transacao: String,
       produto: { 
        type: Schema.Types.ObjectId, 
        ref: 'produto',
        required: false 
      },
      quantidade: { type: Number, default: 1 },
      preco: { type: Number, required: true },
      total: { type: Number, required: true }
    }],
    total: Number,
    quantidade: Number
  }, { timestamps: true });
const estoque = mongoose.model('estoque', estoqueSchema);

module.exports = estoque;