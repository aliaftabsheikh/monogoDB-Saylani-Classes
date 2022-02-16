const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
    res.render("form", { title:"Add Product Form" });
};

exports.postAddProduct = async (req, res) => {
    const product = new Product();
    product.title = req.body.title
    product.price= 100;
    product.ratings= 4.2;
    product.inStock = true;
    await product.save();
    res.send("Saved");
};

exports.fetchAll = async (req, res) => {
    const products = await Product.fetchAll();
    res.render("products", { products });
};