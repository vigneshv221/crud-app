const db = require("../models/index");

const Product = db.products;

//Create and save a new product [Create operation]
exports.create = (req, res) => {
    //Check whether id given
    if (!req.body.name) {
        res.status(400).send({ message: "ERROR: NO PRODUCT ID" });
        return;
    }

    //Creating a new product document
    const product = new Product({
        name: req.body.name,
        productId: req.body.productId,
        description: req.body.description,
        price: req.body.price,
    });

    //Saving in database
    product
        .save(product)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "An error occured while creating product document.",
            });
        });
};

//Get all products from db [Read operation]
exports.findAll = (req, res) => {
    Product.find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "An error occured while fetching product from database.",
            });
        });
};

//Update product by id [Update operation]
exports.update = (req, res) => {
    //checking whether data given to update product
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Update cannot be done without any data!" });
    }

    const id = req.params.id;

    const update = {
        $set: {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
        },
    };

    Product.update({ productId: id }, update)
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update product with product ID=${id}. Please recheck the product ID`,
                });
            } else {
                res.send({ message: "Product updated successfully" });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Product with ID " + id,
            });
        });
};

//Delete product by id [Delete operation]
exports.delete = (req, res) => {
    const id = req.params.id;

    Product.deleteOne({ productId: id })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete product with product ID=${id}. Please recheck the product ID.`,
                });
            } else {
                res.send({ message: "Product delted successfully." });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error deleting Product with ID " + id,
            });
        });
};
