var mongoose = require("mongoose");
var Customer = mongoose.model('Customer');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / Users - Index")

			Customer.find({}, function(err, res){
				if(err){
					console.log(err);
					response.json(err);
					
				}else{
					response.json(res);
				}
			})
		},

		create: function(request, response){
			console.log("Server / Ctrl / Users - Create");
			var customer = new Customer;
			customer.first_name = request.body.first_name;
			customer.save(function(err, res){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					console.log(res);
					response.json(res);
				}
			})
		},
		destroy: function(request, response){
			console.log("Server / Ctrl / Users - Destroy");
			console.log("Destroy params id:", request.params.id);
			Customer.remove({_id:request.params.id}, function(err){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		}
	}
})();