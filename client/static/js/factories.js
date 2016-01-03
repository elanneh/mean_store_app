storeApp.factory('CustomerFactory', function($http, $location){
	return {
		getCustomer: function(callback){
			console.log("CustomerFactory getCustomer");
	
			$http.get('/customers').success(function(response){
				callback(response);
			})
		},
		addCustomer: function(newCustomer, callback){
			if(newCustomer){
				console.log("CustomerFactory add ", newCustomer);
				$http.post('/customers', newCustomer).success(function(response){
					callback(response);
				})
			}
		},
		removeCustomer: function(customer, callback){
			console.log("CustomerFactory remove ", customer);
			$http.delete('/customers/'+customer._id).success(function(){
				callback();
			})
		}
	}
});

storeApp.factory('ProductFactory', function($http, $location){
	return {

		getProduct: function(callback){
			console.log("ProductFactory getProduct");

			$http.get('/products').success(function(response){
				callback(response);
			})
		},
		addProduct: function(newProduct, callback){
			if(newProduct){
				console.log("ProductFactory add ", newProduct);
				$http.post('/products', newProduct).success(function(response){
					callback(response);

				})
			}
		}
	}
});
storeApp.factory('OrderFactory', function($http, $location){
	return {

		getOrder: function(callback){
			console.log("OrderFactory getOrder");

			$http.get('/orders').success(function(response){
				callback(response);
			})
		},
		addOrder: function(newOrder, callback){
			if(newOrder){
				console.log("OrderFactory add ", newOrder);
				$http.post('/orders', newOrder).success(function(response){
					callback(response);
				})
			}
		}
	}
});