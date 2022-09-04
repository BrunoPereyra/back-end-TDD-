const mongoose = require("mongoose")
const { server } = require("../index")
const { POSTproductFeedback } = require("./helpers")
const ProductsFeedback = require("../models/productFeedback")
const Products = require("../models/products")

describe("POST - /productFeedbackcomm TEST", () => {
    test("POST - correct data", async () => {
        const ress = await POSTproductFeedback(
            "aasa",
            "6314c4b63818d83a5815da83"
        )

        const ProductsFeedbackcomm = await ProductsFeedback.findById(ress.body.ress._id)
        const product = await Products.find({ productFeedback: ress.body.ress.Products })

        expect(ress.body.ress).toMatchObject({ _id: ProductsFeedbackcomm._id })
        expect(product).toBeTruthy()
        expect(ress.statusCode).toBe(201)
    })

    test("POST - missing data or maldormed", async () => {
        const countFeedBackComm = await ProductsFeedback.countDocuments({});
        const ress = await POSTproductFeedback(
            "aaaaa",
            "6314c4b63818d83a5815da8"
        )
        const countFeedBackCommsave = await ProductsFeedback.countDocuments({});

        expect(
            ress.body.ress == "id product malformed or not exist or id != 24" ||
            ress.body.ress == "comment is malformed or missing or comment > 5"
        ).toBeTruthy()
        expect(countFeedBackComm == countFeedBackCommsave).toBeTruthy()
        expect(ress.statusCode).toBe(400)

    })
})


afterAll(() => {
    mongoose.connection.close()
    server.close()
});