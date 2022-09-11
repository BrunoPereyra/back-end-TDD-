const Products = require("../models/products")
const Users = require("../models/users")

const postshoppingCart = async (req, ress) => {
    const idUser = req.idUser
    const { idProduct, Delete } = req.body
    const user = await Users.findById(idUser)

    if (idProduct.length !== 24 || typeof idProduct !== "string") {
        return ress.status(400).send({
            ress: "Product not exist or malformed"
        })
    }
    try {
        var product = await Products.findById(idProduct)
    } catch {
        return ress.status(400).send({
            ress: "Product not exist or malformed"
        })
    }

    if (product) {
        if (Delete) {
            const indexProduct = await user.shoppingCart.indexOf("6314c4b63818d83a5815da83")
            if ((indexProduct || indexProduct == 0 ) && indexProduct != -1) {
                user.shoppingCart.splice(indexProduct, 1)
                user.save()
                return ress.status(200).json({
                    ress: product._id
                })
            } else {
                console.log("OJI0JSO0ISÍOU")
                return ress.status(200).send({
                    ress: "all product deletes"
                })
            }
        } else {
            user.shoppingCart = await user.shoppingCart.concat(idProduct)
            user.save()
            return ress.status(201).json({
                ress: product._id
            })
        }
    } else {
        return ress.status(400).send({
            ress: "Product not exist or malformed"
        })
    }

}
module.exports = postshoppingCart