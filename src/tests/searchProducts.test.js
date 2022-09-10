const { mongoose } = require("mongoose")
const { server } = require("../index")
const { GETproducts } = require("./helpers")



describe("GET - /products:URL", () => {
    test("GET - refProduct ok", async () => {
        const ress = await GETproducts("este es el nombre")
        expect(JSON.stringify(ress._body.ress).length >= 1).toBeTruthy()
        expect(ress.statusCode).toBe(200)
    })
    test("GET - id a coincidence", async () => {
        const ress = await GETproducts("este es el nombre", "6314c4b63818d83a5815da83")
        console.log(ress._body.ress)
        expect(ress._body.ress._id == "6314c4b63818d83a5815da83").toBeTruthy()
        expect(ress.statusCode).toBe(200)
    })
    test("GET - there are no coincidences refProduct", async () => {
        const ress = await GETproducts("dnada que ver")
        expect(ress._body.ress).toBe("missing data or malformed refProduct")
        expect(ress.statusCode).toBe(404)
    })
    test("GET - there are no coincidences id", async () => {
        const ress = await GETproducts("dsds", "62fad15c4a49306413d261b9")

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