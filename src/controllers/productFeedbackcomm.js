const ProductsFeedback = require("../models/productFeedback")
const ProductsFeedback = async (req, ress) => {
    const { comment } = req.body
    const ProductsFeedbackcomm = await new ProductsFeedback({
        comment
    })
}
module.exports = ProductsFeedbackcomm