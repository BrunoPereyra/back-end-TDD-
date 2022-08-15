const { POSTcreateProduct } = require("./helpers")
const Products = require("../models/products")
const { server } = require("../index")
const mongoose = require("mongoose")
const Users = require("../models/users")
// faltaaaaaaaaaaaa

describe("POST - /createProduct TEST", () => {

    test.only("POST - correct data", async () => {

        const ress = await POSTcreateProduct(
            nameProduct = "este es el nombre",
            type = "new",
            characteristic = [
                creadoEn = "china",
                characteristic = "esto es napanapskapojsap"
            ],
            stock = 10
        )

        const Product = await Products.findById({ _id: "este es el nombre" })

        console.log(ress.body.ress._id);

        expect(ress.body.ress.nameProduct).toBe(Product.nameProduct)
        expect(user != null).toBeTruthy()
        expect(ress.statusCode).toBe(201)
    })
    test("POST - missing nameProduct or malforme", async () => {

        const ress = await POSTcreateProduct(
            type = "new",
            characteristic = [
                creadoEn = "china",
                characteristic = "esto es napanapskapojsap"
            ],
            stock
            = 10
        )

        expect(ress.body.ress).toBe("missing data or malformed")
        expect(ress.statusCode).toBe(401)
    })

    test("POST - missing type or malformed", async () => {

        const ress = await POSTcreateProduct(
            nameProduct = "este es el nombre",
            characteristic = [
                creadoEn = "china",
                characteristic = "esto es napanapskapojsap"
            ],
            stock
            = 10
        )

        expect(ress.body.ress).toBe("missing data or malformed")
        expect(ress.statusCode).toBe(401)
    })

    test("POST - missing type or malformed", async () => {

        const ress = await POSTcreateProduct(
            nameProduct = "este es el nombre",
            type = "new",
            characteristic = [
                creadoEn = "china",
                characteristic = "esto es napanapskapojsap"
            ],
            stock
            = 10
        )

        expect(ress.body.ress).toBe("missing data or malformed")
        expect(ress.statusCode).toBe(401)
    })

})
afterAll(() => {
    mongoose.connection.close()
    server.close()
});