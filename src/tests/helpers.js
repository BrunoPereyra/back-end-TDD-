const supertest = require("supertest")
const { server } = require("../index")
const api = supertest(server)

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
        .expect(201)

    return ress
}
module.exports = { POSTsignup }