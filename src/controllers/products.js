const Products = require("../models/products");
const Users = require("../models/users");

const products = async (req, ress) => {
    const { idUser } = req;
    const { nameProduct, type, characteristic, stock, price } = req.body;

    if (
        typeof nameProduct != "string" ||
        typeof type != "string" ||
        (type != "new" && type != "used") ||
        typeof characteristic != "object" ||
        typeof stock != "number" ||
        typeof price != "number"
    ) {
        return ress.status(401).json({
            ress: "missing data or malformed",
        });
    }

    const newProduct = await new Products({
        nameProduct,
        type,
        characteristic,
        stock,
        price,
        user: idUser,
        date: new Date(),
    });
    
    try {
        const Productsave = await newProduct.save();

        const user = await Users.findById(idUser);
        user.Products = await user.Products.concat(Productsave.id);
        await user.save();

        ress.status(201).json({
            ress: Productsave,
        });
    } catch (error) {
        ress.status(404).json({
            ress: "error server",
        });
    }
};
module.exports = products;
