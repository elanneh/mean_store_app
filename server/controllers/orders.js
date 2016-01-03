var mongoose = require("mongoose");
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / Orders - Index")
			Order.find({}, function(err, res){
				if(err){
					console.log(err);
					response.json(err);
					
				}else{
					response.json(res);
				}
			})
		},

		create: function(request, response){
			console.log("Server / Ctrl / Orders - Create");
			var order = new Order;
			order.first_name = request.body.first_name.first_name;
			order.item = request.body.item.item;
			order.order_qty = request.body.order_qty;
			order.save(function(err, res){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{			
					Product.update({item: request.body.item.item}, {$inc: {qty: -request.body.order_qty}}, function (err,res){
						if(err){
							console.log(err);
						}
					});

					console.log(res);
					response.json(res);
				}
			})
		}
	}
})();