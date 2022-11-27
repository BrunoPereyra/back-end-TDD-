const { POSTcreateProduct } = require("./helpers")
const Products = require("../models/products")
const { server } = require("../index")
const mongoose = require("mongoose")
const Users = require("../models/users")


describe("POST - /createProduct TEST", () => {

    test("POST - correct data", async () => {

        const ress = await POSTcreateProduct(
            nameProduct = "este es el nombre two",
            type = "used",
            characteristic = [
                creadoEn = "china",
                characteristic = "esto es napanapskapojsap"
            ],
            stock = 10,
            price = 100,
            keywordOne = "a",
            keywordTwo = "s",
            keywordThree = "sca",
            keywordFour = "az",
        )
        const Product = await Products.findById(ress._body.ress._id)
        const user = await Users.find({ Products: Product._id })


        expect(ress.body.ress._id).toBe(Product.id)
        expect(user != null).toBeTruthy()
        expect(ress.statusCode).toBe(201)
    })
    test("POST - one word for each keyword", async () => {
        const ress = await POSTcreateProduct(
            nameProduct = "este es el nombre two",
            type = "used",
            characteristic = [
                creadoEn = "china",
                characteristic = "esto es napanapskapojsap"
            ],
            stock = 10,
            price = 100,
            keywordOne = "a",
            keywordTwo = "s",
            keywordThree = "s ca",
            keywordFour = "az",
        )
        expect(ress._body.ress).toBe("one word for each keyword")
        expect(ress.statusCode).toBe(401)
    })
    test("POST - missing nameProduct or malforme", async () => {

        const ress = await POSTcreateProduct(
            type = "new",
            characteristic = [
                creadoEn = "china",
                characteristic = "esto es napanapskapojsap"
            ],
            stock
            = 10,
            price = 100

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
            = 10,
            price = 100

        )

        expect(ress.body.ress).toBe("missing data or malformed")
        expect(ress.statusCode).toBe(401)
    })

    test("POST - missing characteristic or malformed", async () => {

        const ress = await POSTcreateProduct(
            nameProduct = "este es el nombre",
            type = "new",
            stock
            = 10,
            price = 100

        )

        expect(ress.body.ress).toBe("missing data or malformed")
        expect(ress.statusCode).toBe(401)
    })

    test("POST - missing stock or malformed", async () => {

        const ress = await POSTcreateProduct(
            nameProduct = "este es el nombre",
            type = "used",
            characteristic = [
                creadoEn = "china",
                characteristic = "esto es napanapskapojsap"
            ],
            price = 100

        )

        expect(ress.body.ress).toBe("missing data or malformed")
        expect(ress.statusCode).toBe(401)
    })

    test("POST - missing price or malformed", async () => {

        const ress = await POSTcreateProduct(
            nameProduct = "este es el nombre",
            type = "used",
            characteristic = [
                creadoEn = "china",
                characteristic = "esto es napanapskapojsap"
            ],
            stock
            = 10,

        )

        expect(ress.body.ress).toBe("missing data or malformed")
        expect(ress.statusCode).toBe(401)
    })

})
afterAll(() => {
    mongoose.connection.close()
    server.close()
});