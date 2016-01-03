var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	item: {type: String},
	image: {type: String},
	description:{type: String},
	qty: {type: Number}
	});

mongoose.model("Product", ProductSchema);