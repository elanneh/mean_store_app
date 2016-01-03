var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	first_name: {type: String},
	item: {type: String},
	order_qty: {type: Number},
	created_at: {type: Date, default: Date.now}
	});

mongoose.model("Order", OrderSchema);