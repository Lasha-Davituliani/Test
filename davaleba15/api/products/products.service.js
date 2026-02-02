const products = [
  { id: 1, name: "Milk", category: "Food", price: 4.0, isExpire: false },
  { id: 2, name: "Bread", category: "Food", price: 1.8, isExpire: false },
  { id: 3, name: "TV", category: "Electronics", price: 1800, isExpire: false },
  { id: 4, name: "Coca-Cola", category: "Drink", price: 2.5, isExpire: false },
  { id: 5, name: "Cheese", category: "Food", price: 18.0, isExpire: false },
  {
    id: 6,
    name: "Phone",
    category: "Electronics",
    price: 1000,
    isExpire: false,
  },
  {
    id: 7,
    name: "Tablet",
    category: "Electronics",
    price: 280,
    isExpire: false,
  },
];
const allProducts = (req, res) => {
  res.json(products);
};
const pagination = (req, res) => {
  let { page = 1, take = 3 } = req.query;
  take > 4 ? (take = 4) : take;
  res.json(products.slice((page - 1) * take, take * page));
};

const getByIdProduct = (req, res) => {
  const { id } = req.params;
  const findProduct = products.find((el) => el.id === Number(id));
  if (!findProduct) {
    return res
      .status(404)
      .json({ message: "not found (id is invalid)", data: null });
  }
  res.json({ message: "success", data: findProduct });
};
const createProduct = (req, res) => {
  const { name, category, price, isExpire } = req.body;
  if (!name) {
    return res.status(400).json({ massage: "name is require", data: null });
  } else if (!category) {
    return res.status(400).json({ massage: "category is require", data: null });
  } else if (!price) {
    return res.status(400).json({ massage: "price is require", data: null });
  } else if (isExpire === undefined) {
    return res.status(400).json({ massage: "isExpire is require", data: null });
  }

  const lastId = products[products.length - 1]?.id || 0;
  const newObj = {
    id: lastId + 1,
    name,
    category,
    price,
    isExpire,
  };
  products.push(newObj);
  res.json({ massage: "product added successfully", data: products });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((x) => x.id === Number(id));
  if (index === -1) {
    return res.status(404).json({ massage: "id id invalid" });
  }
  const deleteProduct = products.splice(index, 1);
  res.json({ massage: "deleted successfully", data: deleteProduct });
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, category, price, isExpire } = req.body;
  const index = products.findIndex((x) => x.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ message: "id is invalid" });
  }

  products[index] = {
    ...products[index],
    name: name || products[index].name,
    category: category || products[index].category,
    price: price || products[index].price,
    isExpire: isExpire || products[index].isExpire,
  };
  res.json({ message: "product updated successfully", data: products[index] });
};
module.exports = {
  allProducts,
  pagination,
  getByIdProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
