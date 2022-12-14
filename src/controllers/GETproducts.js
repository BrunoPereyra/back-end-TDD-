const Products = require("../models/products")
const Users = require("../models/users")

const GETproducts = async (req, ress) => {
    const { refProduct, id } = req.query
    const { idUser } = req
    if (id) {
        var product = ""
        if (id.length == 24 && typeof id == "string") {
            try {
                
                product = await Products.findById(id)
                .populate({
                    path: "user",
                    select: {},
                    match: {},
                    options: { sort: { date: -1 } },
                })
                .populate({
                    path: "ProductsFeedback",
                    select: {},
                    match: {},
                    options: { sort: { date: -1 } },
                })
                if (product == null) {
                    return ress.status(404).json({
                        ress: product
                    })
                } else {
                    return ress.status(200).json({
                        ress: product
                    })
                }
            } catch (error) {
                return ress.status(404).json({
                    ress: null
                })
            }
        } else {
            return ress.status(404).json({
                ress: "missing data or malformed id"
            })
        }
    }
    

    const user = await Users.findById(idUser)
    if (typeof (refProduct) == "string") {
        
        let product = await Products.find({
            $or: [
                { nameProduct: refProduct },
                { keywordOne: refProduct },
                { keywordTwo: refProduct },
                { keywordThree: refProduct },
                { keywordFour: refProduct }
            ]
        }).limit(20)
        if (product.length == 0) {
            return ress.status(404).json({
                ress: "missing data or malformed refProduct"
            })
        } else if (product.length >= 1) {
            user.lastVisitedProduct = refProduct
            await user.save()
            return ress.status(200).json({
                ress: product
            })
        }

    } else {
        return ress.status(200).json({
            ress: "missing data or malformed refProduct"
        })
    }
}
module.exports = GETproducts