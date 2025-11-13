const { isValidObjectId } = require("mongoose");
const productModel = require("../models/priduct.model");

const findAllProducts = async (req, res) => {
  const findAllProducts = await productModel.find();
  res.json(findAllProducts);
};

const findProductById = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res
      .status(404)
      .json({ massage: "not found(invalid id)", data: null });
  }
  const findById = await productModel.findById(id);
  res.json({ massage: "Successfully", data: findById });
};

const createProduct = async (req, res) => {
  const { name, price, category, description } = req.body;
  if (!name || typeof name !== "string" || !price || !category) {
    return res.status(400).json({
      massage: "name must be a string, age and email is require fields",
      data: null,
    });
  }
  const createProduct = await productModel.create({
    name,
    price,
    category,
    description,
  });
  res.json({ massage: "created succssesfully", data: createProduct });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res
      .status(404)
      .json({ massage: "not found (invalid Id)", data: null });
  }
  const deleteProduct = await productModel.findByIdAndDelete(id);
  res.json({ massage: "deleted succssesfully", data: deleteProduct });
};
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, category, description } = req.body;
  if (!isValidObjectId) {
    return res.status(404).json({ massage: "not found", data: null });
  }
  const findProductAndUpdate = await productModel.findByIdAndUpdate(
    id,
    { name, price, category, description },
    { new: true }
  );
  res.json({ massage: "updated successesfully", data: findProductAndUpdate });
};
module.exports = {
  findAllProducts,
  findProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
