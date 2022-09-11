const mongoose = require("mongoose")
const { server } = require("../index")
const Products = require("../models/products")
const { POSTHandleProduct, getAllMyProducts } = require("./helpers")



describe("GET - /allProducts", () => {
    test("get all products correct data", async () => {
        const ress = await getAllMyProducts()

        expect(ress._body.ress).toBeTruthy()
        expect(ress.statusCode).toBe(200)
    })
    test("get all not products", async () => {
        // cambiar idUser  para que este ok in controllers
        const ress = await getAllMyProducts()

        expect(ress._body.ress).toBe("not products")
        expect(ress.statusCode).toBe(404)
    })
})

describe("POST - /makeOffersOnProducts", () => {
    test("makeOffersOnProducts correct data", async () => {
        const ress = await POSTHandleProduct("6314c4b63818d83a5815da83", -99)
        const product = await Products.findById("6314c4b63818d83a5815da83")

        expect(ress._body.ress.offers).toBe(product.offers)
        expect(ress.statusCode).toBe(201)
    })
    test("unauthorized or product not exist", async () => {
        const ress = await POSTHandleProduct("6314c4b63818d83a5815da8", -20)

        expect(ress._body.ress).toBe("unauthorized or product not exist")
        expect(ress.statusCode).toBe(401)
    })
    test("unauthorized or product not exist", async () => {
        const ress = await POSTHandleProduct("6314c4b63818d83a5815da83", -100)

        expect(ress._body.ress).toBe("offer rejected")
        expect(ress.statusCode).toBe(400)
    })
})


afterAll(() => {
    mongoose.connection.close()
    server.close()
})