const { POSTcreateProduct } = require("./helpers")
const Products = require("../models/products")

describe("POST - /createProduct TEST", () => {
    test.only(async () => {
        
        const productValues = {
            nameProduct: "este es el nombre",
            type: "new",
            characteristic: [
                creadoEn = "china",
                characteristic = "esto es napanapskapojsap"
            ],
            stock: 10
        }

        const ress = await POSTcreateProduct(productValues)
        const Product = await Products.find({ nameProduct: "este es el nombre" })
        expect(ress.body.ress.nameProduct).toBe(Product.nameProduct)
        expect(ress.statusCode).toBe(201)
    })
})