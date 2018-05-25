const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const mongoUri = 'mongodb://localhost/purchases';
mongoose.connect(mongoUri);

const purchasesSchema = new mongoose.Schema({
  user: Object,
  address: Object,
  'credit card': Object,
});

const Purchase = mongoose.model('Purchases', purchasesSchema);

module.exports = Purchase;
