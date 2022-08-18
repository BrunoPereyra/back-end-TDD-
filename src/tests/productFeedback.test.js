const mongoose = require("mongoose")
const { server } = require("../index")
const { POSTproductFeedback } = require("./helpers")
const ProductsFeedback = require("../models/productFeedback")
const Products = require("../models/products")

describe("POST - /productFeedbackcomm TEST", () => {
    test("POST - correct data", async () => {
        const ress = await POSTproductFeedback(
            "aaaa",
            "62fad15c4a49306413d261bd"
        )
        const ProductsFeedbackcomm = await ProductsFeedback.findById(ress.body.ress._id)
        const product = await Products.find({ productFeedback: ress.body.ress.Products })

        expect(ress.body.ress).toMatchObject({ _id: ProductsFeedbackcomm._id })
        expect(product).toBeTruthy()
        expect(ress.statusCode).toBe(201)
    })
    
    test.only("POST - missing data or maldormed", async () => {
        const countFeedBackComm = await ProductsFeedback.countDocuments({});
        const ress = await POSTproductFeedback(
            "aaaaaa",
            "62fad15c4a49306413d261b9"
        )
        const countFeedBackCommsave = await ProductsFeedback.countDocuments({});

        expect(
            ress.body.ress == "id product malformed or not exist or id != 24" ||
            ress.body.ress == "comment is malformed or missing or coomment > 5"
        ).toBeTruthy()
        expect(countFeedBackComm == countFeedBackCommsave).toBeTruthy()
        expect(ress.statusCode).toBe(400)

    })
})


afterAll(() => {
    mongoose.connection.close()
    server.close()
});