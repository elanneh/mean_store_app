var Product = mongoose.model('Product');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / Products - Index")

			Product.find({}, function(err, res){
				if(err){
					console.log(err);
					response.json(err);
					
				}else{
					response.json(res);
				}
			})
		},
		create: function(request, response){
			console.log("Server / Ctrl / Products - Create");
			var product = new Product;
			product.item = request.body.item;
			product.image = request.body.image;
			product.description = request.body.description;
			product.qty = request.body.qty;
			product.save(function(err, res){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					console.log(res);
					response.json(res);
				}
			})
		}
	}
})();