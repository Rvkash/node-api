const express = require('express');
const routes = express.Router();

const ProductController = require ('./controllers/ProductController'); 

routes.get("/Products", ProductController.store);
routes.get('/products/:id', ProductController.show);
routes.post("/Products", ProductController.index);
routes.put("/Products/:id", ProductController.update);
routes.delete("/Products/:id", ProductController.destroy);

module.exports = routes;

