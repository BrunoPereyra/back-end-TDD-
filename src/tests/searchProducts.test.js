const { mongoose } = require("mongoose")
const { server } = require("../index")
const Products = require("../models/products")
const { GETproducts } = require("./helpers")

describe("GET - /products:URL", () => {
    test("GET - nameproducts ok", async () => {
        const ress = await GETproducts("este es el nombre", "abbasds")
        const product = await Products.find({nameProduct:"este es el nombre"})

        expect(ress.body.ress).toEqual(product)
        expect(ress.statusCode).toBe(200)
    })
})
afterAll(() => {
    mongoose.connection.close()
    server.close()
})