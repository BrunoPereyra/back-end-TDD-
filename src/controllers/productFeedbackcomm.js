const ProductsFeedback = require("../models/productFeedback")
const Products = require("../models/products")

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
        })
        ress: "comment is malformed or missing or comment > 5"
    }

    const productExist = await Products.findById(IdProduct)

    if (!productExist) {
        return ress.status(400).json({
            ress: "id product malformed or not exist or id != 24"
        })
    }
    try {

        const ProductsFeedbackcomm = await new ProductsFeedback({
            comment,
            user: idUser,
            Products: IdProduct, 
            date: new Date(),
        })

        const SaveProductsFeedbackcomm = await ProductsFeedbackcomm.save()
        productExist.productFeedback = await productExist.productFeedback.concat(SaveProductsFeedbackcomm._id)
        productExist.save()
        ress.status(201).json({
            ress: SaveProductsFeedbackcomm
        })
    } catch (error) {
        return ress.status(400).json({
            ress: "id product malformed or not exist or id != 24"
        })
    }

}
module.exports = ProductsFeedbackComm