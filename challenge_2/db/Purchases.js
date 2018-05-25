const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoUri = 'mongodb://localhost/purchases';
const db = mongoose.connect(mongoUri);

const purchasesSchema = new mongoose.Schema({
  user:Object,
  address:Object,
  creditCard:Object
});

const Purchase = mongoose.model('Purchases', purchasesSchema);

module.exports = Purchase;