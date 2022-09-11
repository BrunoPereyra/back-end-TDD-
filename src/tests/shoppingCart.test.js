const { mongoose } = require("mongoose");
const { server } = require("../index");
const Users = require("../models/users");
const { POSTshoppingCart } = require("./helpers")

describe("POST - /postshoppingCart", () => {
    test("correct Product", async () => {
        const ress = await POSTshoppingCart("6314c4b63818d83a5815da83")
        const user = await Users.findById("6314c457a1d77a3155b49e2b")
        const shoppingCart = await user.shoppingCart.find(p => p == ress._body.ress)
        expect(shoppingCart).toBeTruthy()
        expect(ress.statusCode).toBe(201)
    })
    test("Product not exist or malformed", async () => {
        const ress = await POSTshoppingCart("6314c4b63818d83a5815da82")
        expect(ress._body.ress).toBe("Product not exist or malformed")
        expect(ress.statusCode).toBe(400)
    })
    test("Delete product", async () => {
        const user = await Users.findById("6314c457a1d77a3155b49e2b")
        const countProduct = user.shoppingCart.length
        const ress = await POSTshoppingCart("6314c4b63818d83a5815da83", true)
        const userMoment2 = await Users.findById("6314c457a1d77a3155b49e2b")
        expect(
            (countProduct > userMoment2.shoppingCart.length) ||
            (ress._body.ress = "all product deletes")
        ).toBeTruthy()
        expect(ress.statusCode).toBe(200)
    })
});

afterAll(() => {
    server.close()
    mongoose.connection.close()
})
