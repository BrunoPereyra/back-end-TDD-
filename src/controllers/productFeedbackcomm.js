const ProductsFeedback = require("../models/productFeedback")

const ProductsFeedbackComm = async (req, ress) => {
    const { idUser } = req
    const { comment, IdProduct } = req.body

    if (typeof (IdProduct) != "string") {
        return ress.status(400).json({
            ress: "id product malformed or not exist or id != 24"
        })
    } else if (typeof (comment) != "string") {
        return ress.status(400).json({
            ress: "comment is malformed or missing or coomment > 5"
        })
    }

    if (IdProduct.length != 24) {
        return ress.status(400).json({
            ress: "id product malformed or not exist or id != 24"
        })
    } else if (comment.length < 5) {
        return ress.status(400).json({
            ress: "comment is malformed or missing or coomment > 5"
        })
    }

    const productExist = await ProductsFeedback.findById(IdProduct)

    if (!productExist) {
        return ress.status(400).json({
            ress: "id product malformed or not exist or id != 24"
        })
    }
    try {

        const ProductsFeedbackcomm = await new ProductsFeedback({
            comment,
            user: idUser,
            Products: IdProduct
        })

        const SaveProductsFeedbackcomm = await ProductsFeedbackcomm.save()
        ress.status(201).json({
            ress: SaveProductsFeedbackcomm
        })
    } catch (error) {

    }

}
module.exports = ProductsFeedbackComm