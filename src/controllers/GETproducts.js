const Products = require("../models/products")

const GETproducts = async (req, ress) => {
    const { nameProduct, id } = req.query
    var product = ""
    if (id) {
        if (id.length == 24 && typeof id == "string") {
            try {

                product = await Products.findById(id)
                    .sort({ date: -1 })
                    .populate({
                        path: "user",
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
   console.log(nameProduct)
    product = await Products.find({ nameProduct })
        .sort({ date: -1 })
        .populate({
            path: "user",
            select: {},
            match: {},
            options: { sort: { date: -1 } },
        })
    console.log(product)
    // if (typeof (nameProduct) == "string") {
    //     try {
    //         product = await Products.find({ nameProduct: nameProduct })
    //             .sort({ date: -1 })
    //             .populate({
    //                 path: "user",
    //                 select: {},
    //                 match: {},
    //                 options: { sort: { date: -1 } },
    //             })

    //         if (product.length > 0) {
    //             return ress.status(200).json({
    //                 ress: product
    //             })
    //         } else {
    //             return ress.status(404).json({
    //                 ress: product
    //             })
    //         }
    //     } catch (error) {
    //         return ress.status(404).json({
    //             ress: product
    //         })
    //     }
    // } else {
    //     return ress.status(200).json({
    //         ress: "missing data or malformed nameProduct"
    //     })
    // }
}
module.exports = GETproducts