const Products = require("../models/products");
const Users = require("../models/users");

const products = async (req, ress) => {
    const { idUser } = req;
    const { nameProduct, type, characteristic, stock, price,
        keywordOne,
        keywordTwo,
        keywordThree,
        keywordFour } = req.body;

    if (
        typeof nameProduct != "string" ||
        typeof type != "string" ||
        (type != "new" && type != "used") ||
        typeof characteristic != "object" ||
        typeof stock != "number" ||
        typeof price != "number" ||
        typeof keywordOne != "string" ||
        keywordOne.length < 1 ||
        typeof keywordTwo != "string" ||
        keywordTwo.length < 1 ||
        typeof keywordThree != "string" ||
        keywordThree.length < 1 ||
        typeof keywordFour != "string" ||
        keywordFour.length < 1

    ) {
        return ress.status(401).json({
            ress: "missing data or malformed",
        });
    }
    
    let stringInteractionStateKeyword = false
    for (p of keywordOne) {
        if (p == " ") {
            stringInteractionStateKeyword = true
        }
    }
    for (p of keywordTwo) {
        if (p == " ") {
            stringInteractionStateKeyword = true
        }
    }
    for (p of keywordThree) {
        if (p == " ") {
            stringInteractionStateKeyword = true
        }
    }
    for (p of keywordFour) {
        if (p == " ") {
            stringInteractionStateKeyword = true
        }
    }
    if (stringInteractionStateKeyword) {
        return ress.status(401).json({
            ress: "one word for each keyword",
        });
    }

    const newProduct = await new Products({
        nameProduct,
        type,
        characteristic,
        stock,
        price,
        keywordOne,
        keywordTwo,
        keywordThree,
        keywordFour,
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
