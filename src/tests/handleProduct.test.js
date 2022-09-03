const mongoose = require("mongoose")
const { server } = require("../index")
const Products = require("../models/products")
const Users = require("../models/users")
const { POSTmakeOffersOnProduct, getAllMyProducts } = require("./helpers")


describe("GET - /allProducts", () => {
    test("get all products correct data", async () => {
        const ress = await getAllMyProducts()

        console.log(ress._body.ress)
        expect(ress._body.ress).toBeTruthy()
        expect(ress.statusCode).toBe(200)
    })
    test("get all not products", async () => {
        const ress = await getAllMyProducts()

        expect(ress._body.ress).toBe("not products")
        expect(ress.statusCode).toBe(404)
    })
})

describe("POST - /makeOffersOnProducts", () => {
    test("makeOffersOnProducts correct data", async () => {
        const ress = await POSTmakeOffersOnProduct("62fad2f3350f84e4f7590b36", -10)
        const product = await Products.findById("62fad2f3350f84e4f7590b36")


        expect(ress._body.ress.offers).toBe(product.offers)
        expect(ress.statusCode).toBe(201)
    })
    test("makeOffersOnProducts missing data", async () => {
        const ress = await POSTmakeOffersOnProduct()

        expect(ress._body.ress).toBe("Identificación del producto incorrecta u oferta fallida")
        expect(ress.statusCode).toBe(400)
    })
})


afterAll(() => {
    mongoose.connection.close()
    server.close()
})