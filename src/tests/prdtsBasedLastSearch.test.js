const mongoose = require("mongoose")
const { server } = require("../index")
const Users = require("../models/users")
const { ProductsfortheUser } = require("./helpers")

describe("GET - /productsfortheUser", () => {
    test.only("there is a previous visit", async () => {
        const ress = await ProductsfortheUser()
        expect(ress._body.ress.length >= 1).toBeTruthy()
        expect(ress.statusCode).toBe(202)
    })
    test("there is no previous visit", async () => {
        const ress = await ProductsfortheUser()
        expect(ress._body.ress).toBe("no last visit")
        expect(ress.statusCode).toBe(203)

    })

})

afterAll(() => {
    mongoose.connection.close()
    server.close()
})