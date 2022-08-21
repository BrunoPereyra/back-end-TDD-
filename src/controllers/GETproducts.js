const Products = require("../models/products")

const GETproducts = async (req, ress) => {
    const { nameProduct, id } = req.query
    console.log(nameProduct)
    const product = await Products.find({nameProduct:"este es el nombre"})
    return ress.status(200).json({
        ress: product
    })
}
module.exports = GETproducts