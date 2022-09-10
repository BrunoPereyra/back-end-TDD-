const Products = require("../models/products")
const User = require("../models/users")

const HandleProduct = async (req, ress) => {
    const { idProduct, offers } = req.body
    const { idUser } = req

    const user = await User.findById(idUser)
    const authorized = await user.Products.find(P => P == idProduct ? true : false)


    if (!authorized) {
        return ress.status(401).json({
            ress: "unauthorized or product not exist"
        })
    } else {
        if (idProduct.length == 24 && typeof idProduct == "string" && typeof offers == "number") {
            const productId = await Products.findById(idProduct)
            if (productId && offers < 0 && offers >= -99) {
                productId.offers = productId.offers = offers
                const productSave = await productId.save()
                return ress.status(201).json({
                    ress: productSave
                })
            } else {
                return ress.status(400).json({
                    ress: "offer rejected"
                })
            }
        }
    }

}
module.exports = HandleProduct