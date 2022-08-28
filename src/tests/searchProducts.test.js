const { mongoose } = require("mongoose")
const { server } = require("../index")
const Products = require("../models/products")
const { GETproducts } = require("./helpers")

describe("GET - /products:URL", () => {
    test("GET - nameproducts ok", async () => {
        const ress = await GETproducts("este es el nombre")
        expect(JSON.stringify(ress._body.ress).length >= 1).toBeTruthy()
        expect(ress.statusCode).toBe(200)
    })
    test("GET - id a coincidence", async () => {
        const ress = await GETproducts("este es el nombre", "62fad15c4a49306413d261bd")

        expect(ress._body.ress._id == "62fad15c4a49306413d261bd").toBeTruthy()
        expect(ress.statusCode).toBe(200)
    })
    test("GET - there are no coincidences nameProduct", async () => {
        const ress = await GETproducts("dsds")

        expect(JSON.stringify(ress._body.ress).length == 0).toBeTruthy()
        expect(ress.statusCode).toBe(404)
    })
    test("GET - there are no coincidences id", async () => {
        const ress = await GETproducts("dsds","62fad15c4a49306413d261b9")

        expect(ress._body.ress == null).toBeTruthy()
        expect(ress.statusCode).toBe(404)
    })
    test("GET - id error or missing ", async () => {
        const ress = await GETproducts("oihjoih", "62fadhi61bda")

        expect(ress._body.ress).toBe("missing data or malformed id")
        expect(ress.statusCode).toBe(404)
    })
})
afterAll(() => {
    mongoose.connection.close()
    server.close()
})