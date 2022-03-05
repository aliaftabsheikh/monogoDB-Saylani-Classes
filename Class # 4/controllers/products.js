const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
    res.render("form", { title:"Add Product Form" });
};

exports.postAddProduct = async (req, res) => {
    const product = new Product({
        title : req.body.title,
        price : req.body.price,
        ratings : req.body.ratings,
        inStock : req.body.inStock,
        description : req.body.description
    });
   
    await product.save();
    res.send("Saved");
};

exports.fetchAll = async (req, res) => {
    const products = await Product.findByTitle('BOOKS')
    console.log(products);
    // const products = await Product.fetchAll();
    res.render("products", { products });
};