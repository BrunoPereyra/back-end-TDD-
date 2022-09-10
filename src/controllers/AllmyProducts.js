const Users = require("../models/users")

const AllMyProducts = async (req, ress) => {
    const idUser = req.idUser
    const user = await Users.findById(idUser)
        .populate({
            path: "Products",
            select: {},
            match: {},
            options: { sort: { date: -1 } },
        })

    if (user.Products[0] !== undefined ) {
        let products =  user.Products
        ress.status(200).json({
            ress: products
        })
    } else {
        ress.status(404).json({
            ress: "not products"
        })
    }
}
module.exports = AllMyProducts