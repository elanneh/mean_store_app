storeApp.controller('MainController', function(CustomerFactory, ProductFactory, OrderFactory){
	console.log("MainController Loaded");
	var that = this;
	
	var getCustomer = function(){
		console.log("users controller get users");
		
		CustomerFactory.getCustomer(function(customers){
			console.log(this);
			that.customers = customers;
		});
	}

	this.addCustomer = function(newCustomer){
		console.log("clicked");
		if(newCustomer){
			CustomerFactory.addCustomer(newCustomer, function(){
				getCustomer();
				that.newCustomer = {};
			});
		}
	}

	this.removeCustomer = function(customer){
		console.log("remove user ", customer);
		CustomerFactory.removeCustomer(customer, function(){
			getCustomer();
		})
	}

	getCustomer();

	var getProduct = function(){
		console.log("product controller get products");
		
		ProductFactory.getProduct(function(products){
			console.log(this);
			that.products = products;
		});
	}	

	this.addProduct = function(newProduct){
		console.log("product add clicked");
		if(newProduct){
			ProductFactory.addProduct(newProduct, function(){
				getProduct();
				that.newProduct = {};
			});
		}
	}

	getProduct();

	var getOrder = function(){
		console.log("order controller get orders");
		
		OrderFactory.getOrder(function(orders){
			console.log(this);
			that.orders = orders;
		});
	}	

	this.addOrder = function(newOrder){
		console.log("order add clicked");
		if(newOrder){
			OrderFactory.addOrder(newOrder, function(){
				getOrder();
				that.newOrder = {};
			});
		}
	}

	getOrder();

var getDate = function(){
	  this.date1 = new Date('2005/01/01');
  this.date2 = new Date('2006-01-01T04:00:00.000Z');
}




});