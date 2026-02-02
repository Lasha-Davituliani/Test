const express = require("express")
const app = express()
const connectMongo = require("./db/connectMongo")
const productsSchema = require("./schema/products")
const { isValidObjectId } = require("mongoose")
const cors = require("cors")

connectMongo()
app.use(express.json())
app.use(cors())

app.get("/", async (req, res) => {
    res.send("hello world")
})

app.get("/products", async (req, res) => {
    let findAllProduct = await productsSchema.find()
    res.json(findAllProduct)
})

app.get("/products/:id", async (req, res) => {
    let { id } = req.params
    if (!isValidObjectId(id)) {
        return res.status(400).json({ message: "inavlid mongo id" })
    }
    let findProductById = await productsSchema.findById(id)
    res.json(findProductById)
})


app.post("/products", async (req, res) => {
    let { name, price, category, description } = req.body
    if (!name || !price || !category || !description) {
        return res.status(400).json({ message: "name,price,category and description is required", type: null })
    }
    let createProduct = await productsSchema.create({ name, price, category, description })
    res.json(createProduct)
})

app.put("/products/:id", async (req, res) => {
    let { id } = req.params
    let { name, price, category, description } = req.body
    if (!isValidObjectId(id)) {
        return res.status(400).json({ message: "inavlid mongo id" })
    }
    let updateProduct = await productsSchema.findByIdAndUpdate(id, { name, price, category, description }, { new: true })
    res.json(updateProduct)
})


app.delete("/products/:id", async (req, res) => {
    let { id } = req.params
    if (!isValidObjectId(id)) {
        return res.status(400).json({ message: "inavlid mongo id" })
    }
    let deletedProduct = await productsSchema.findByIdAndDelete(id)
    res.json(deletedProduct)
})

app.listen(3000, () => {
    console.log("server running on http://localhost:3000")
})