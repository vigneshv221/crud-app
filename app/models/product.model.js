module.exports = (mongoose) => {
    const Product = mongoose.model(
        "product",
        mongoose.Schema(
            {
                name: String,
                productId: Number,
                description: String,
                price: Number,
            },
            { timestamps: true }
        )
    );

    return Product;
};

//This model represents products collection in database
// an instance of this model "Product" is a document in the products collection
