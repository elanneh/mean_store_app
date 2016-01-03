var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  first_name: { type: String, trim: true },
  created_at: { type: Date, default: Date.now }
});

mongoose.model('Customer', CustomerSchema);
CustomerSchema.path('first_name').required(true, "First Name is required");