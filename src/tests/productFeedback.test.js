const mongoose = require("mongoose")
const { server } = require("../index")
const { POSTproductFeedback } = require("./helpers")
const ProductsFeedback = require("../models/productFeedback")

describe("POST - /productFeedbackcomm TEST", () => {
    test("POST - correct data", async () => {
        const ress = await POSTproductFeedback(
            comment = "aaaa"
        )
        const ProductsFeedbackcomm = await ProductsFeedback.findById(ress.body.ress._id)
        
        expect(ress.body.ress._id).toBe(ProductsFeedbackcomm._id)
        expect(ress.statusCode).toBe(201)
    })
})


afterAll(() => {
    mongoose.connection.close()
    server.close()
});