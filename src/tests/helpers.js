const supertest = require("supertest")
const { app } = require("../index")
const api = supertest(app)

const POSTsignup = async (
    nameUser = false,
    password = false,
    fullName = false,
    Gmail = false
) => {
    const userData = {
        nameUser,
        password,
        fullName,
        Gmail
    }
    const ress = await api
        .post("/signup")
        .set('Content-type', 'application/json')
        .send(userData)

    return ress
}
const POSTlogin = async (
    nameUser = false,
    password = false,
) => {
    const loginData = {
        nameUser,
        password,
    }
    const ress = await api
        .post("/login")
        .set('Content-type', 'application/json')
        .send(loginData)

    return ress
}
module.exports = { POSTsignup, POSTlogin }