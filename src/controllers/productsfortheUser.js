const Users = require("../models/users")
const Products = require("../models/products")
const productsfortheUser = async (req, ress) => {
    const { idUser } = req
    const user = await Users.findById(idUser)
    if (!user.lastVisitedProduct || user.lastVisitedProduct == "") {
        console.log("AAAAAAAAAAAAA");
        ress.status(203).json({
            ress: "no last visit"
        })
    } else {
        const UserlastVisitedProduct = user.lastVisitedProduct
        let products = await Products.find({
            $or: [
                { nameProduct: UserlastVisitedProduct },
                { keywordOne: UserlastVisitedProduct },
                { keywordTwo: UserlastVisitedProduct },
                { keywordThree: UserlastVisitedProduct },
                { keywordFour: UserlastVisitedProduct }
            ]
        }).limit(4)
        ress.status(202).json({
            ress: products
        })

    }
}
module.exports = productsfortheUser