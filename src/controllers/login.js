const jwt = require("jsonwebtoken")
const Users = require("../models/users")
const bcrypt = require("bcrypt")
const { privatekey } = require("../config")

const login = async (req, ress) => {
    const { password, nameUser } = req.body

    if (typeof (nameUser) != "string" && typeof (password) == "string") {
        return ress.status(400).json({
            ress: "missing nameUser or incorrect data"
        })
    } else if (typeof (password) != "string" && typeof (nameUser) == "string") {
        return ress.status(400).json({
            ress: "missing password or incorrect data"
        })
    } else if (typeof (password) != "string" && typeof (nameUser) != "string") {
        return ress.status(400).json({
            ress: "missing nameUser and password"
        })
    }

    const user = await Users.findOne({ nameUser })
    if (user === null) {
        return ress.status(401).json({
            ress: "user doest not exist or incorrect password"
        })
    } else {
        var passwordCompare = await bcrypt.compare(password, user.passwordHash)
    }
    if (passwordCompare) {
        const dataToken = {
            id: user.id,
            fullName: user.fullName
        }
        const token = await jwt.sign(dataToken, privatekey)
        return ress.status(200).json({
            ress: {
                token,
                nameUser: user.nameUser
            }
        })
    } else {
        return ress.status(401).json({
            ress: "user doest not exist or incorrect password"
        })
    }
}
module.exports = login