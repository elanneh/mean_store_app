var mongoose = require("mongoose");


module.exports = function(storeApp) {
  	var customers = require('../controllers/customers.js');
	storeApp

	// - - - Customer - - -
    // Index
	.get('/customers', function(request, response) { 
		customers.index(request, response) })
	// New
	.get('/customers/new', function(request, response) { 
		customers.create(request, response) })
	// Show
	.get('/customers/:id', function(request, response) { 
		customers.show(request, response) })
	// Edit 
	.post('/customers/:id/edit', function(request, response) { 
		customers.update(request, response) })
	// Create
	.post('/customers', function(request, response) { 
		customers.create(request, response) })	
	// Destroy
	.delete('/customers/:id', function(request, response) { 
		customers.destroy(request, response) })
	// Update
	.put('/customers/:id', function(request, response) { 
		customers.update(request, response) })

  	var orders = require('../controllers/orders.js');
	storeApp

	// - - - Orders - - -
    // Index
	.get('/orders', function(request, response) { 
		orders.index(request, response) })
	// New
	.get('/orders/new', function(request, response) { 
		orders.create(request, response) })
	// Show
	.get('/orders/:id', function(request, response) { 
		orders.show(request, response) })
	// Edit 
	.post('/orders/:id/edit', function(request, response) { 
		orders.update(request, response) })
	// Create
	.post('/orders', function(request, response) { 
		orders.create(request, response) })	
	// Destroy
	.delete('/orders/:id', function(request, response) { 
		orders.destroy(request, response) })
	// Update
	.put('/orders/:id', function(request, response) { 
		orders.update(request, response) })


  	var products = require('../controllers/products.js');
	storeApp

	// - - - Products - - -
    // Index
	.get('/products', function(request, response) { 
		products.index(request, response) })
	// New
	.get('/products/new', function(request, response) { 
		products.create(request, response) })
	// Show
	.get('/products/:id', function(request, response) { 
		products.show(request, response) })
	// Edit 
	.post('/products/:id/edit', function(request, response) { 
		products.update(request, response) })
	// Create
	.post('/products', function(request, response) { 
		products.create(request, response) })	
	// Destroy
	.delete('/products/:id', function(request, response) { 
		products.destroy(request, response) })
	// Update
	.put('/products/:id', function(request, response) { 
		products.update(request, response) })
};