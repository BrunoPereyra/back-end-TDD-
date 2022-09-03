const Users = require("../models/users")

const AllMyProducts = async (req, ress) => {
    const idUser = req.idUser
    const user = await Users.findById("630f794c2b5915e08294a5f2")
        .populate({
            path: "Products",
            select: {},
            match: {},
            options: { sort: { date: -1 } },
        })
    console.log(user.Products);
    if (user.Products != undefined) {
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