const { isValidObjectId } = require("mongoose");
const productModel = require("../models/priduct.model");

const findAllProducts = async (req, res) => {
  const findAllProducts = await productModel.find();
  res.json(findAllProducts);
};

const paginatedProducts = async (req, res) => {
  try {
    let { page = 1, limit = 5 } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    // მაქსიმუმ 5 ჩანაწერი ერთ გვერდზე
    if (limit > 5) limit = 5;

    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      productModel.find().skip(skip).limit(limit),
      productModel.countDocuments(),
    ]);

    res.json({
      message: "success",
      data: products,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
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
  if (price < 2 || price > 4000) {
    return res.status(400).json({
      massage: "The product price must be at least 2 and at most 4000",
      data: `your input price ${price}`,
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
  paginatedProducts,
  findProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
