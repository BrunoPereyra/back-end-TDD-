const supertest = require("supertest")
const { app } = require("../index")
const api = supertest(app)

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjVmNjc0ZWYxZjAxOTFmMmZlOTYxMCIsImZ1bGxOYW1lIjoiZnVsbE5hbWUiLCJpYXQiOjE2NjM0MzIzNTl9.lFWm75z-m2r_fD19YvbQZ4e2BFkwJ91fd1B4HCmq4bQ"

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
const POSTcreateProduct = async (
    nameProduct = false,
    type = false,
    characteristic = false,
    stock = false,
    price = false,
    keywordOne = "",
    keywordTwo = "",
    keywordThree = "",
    keywordFour = "",
) => {
    const data = {
        nameProduct,
        type,
        characteristic,
        stock,
        price,
        keywordOne,
        keywordTwo,
        keywordThree,
        keywordFour
    }
    const ress = await api
        .post("/createProduct")
        .set("Content-type", "application/json")
        .set('Authorization', 'Bearer ' + token)
        .send(data)
    return ress
}
const POSTproductFeedback = async (comment = "", IdProduct = "aaaa") => {
    const data = {
        comment,
        IdProduct
    }
    const ress = await api
        .post("/productFeedbackcomm")
        .set("Content-type", "application/json")
        .set('Authorization', 'Bearer ' + token)
        .send(data)
    return ress
}
const GETproducts = async (refProduct = false, id = false) => {
    const ress = await api
        .get(`/products?${"refProduct=" + refProduct}
           ${id ? `&id=${id}` : ""
            }`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .expect("Content-Type", /json/)
    return ress

}
const getAllMyProducts = async () => {
    const ress = await api
        .get("/AllMyProducts")
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .expect("Content-Type", /json/)
    return ress
}
const POSTHandleProduct = async (idProduct = false, offers = false) => {
    const ress = await api
        .post("/HandleProduct")
        .set("Content-type", "application/json")
        .set("Authorization", "Bearer " + token)
        .send({ idProduct, offers })
        .expect("Content-Type", /json/)
    console.log(ress.body)
    return ress
}
const POSTshoppingCart = async (idProduct = false, Delete = false) => {
    const ress = await api
        .post("/postshoppingCart")
        .set("Content-type", "application/json")
        .set("Authorization", "Bearer " + token)
        .send({ idProduct, Delete })
        .expect("Content-Type", /json/)
    return ress
}
module.exports = {
    POSTsignup,
    POSTlogin,
    POSTcreateProduct,
    POSTproductFeedback,
    GETproducts,
    POSTHandleProduct,
    getAllMyProducts,
    POSTshoppingCart
}