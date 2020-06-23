module.exports = (app) => {
    const products = require("../controllers/product.controller.js");

    var router = require("express").Router();

    //Creating a new product
    router.post("/", products.create);

    //Get all products
    router.get("/", products.findAll);

    //Update product with id
    router.put("/:id", products.update);

    //Delete product with id
    router.delete("/:id", products.delete);

    app.use("/api/products", router);
};
