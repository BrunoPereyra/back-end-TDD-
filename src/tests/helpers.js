const supertest = require("supertest")
const { app } = require("../index")
const api = supertest(app)

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjk4NDUyYzVmNDYyMWM3MTc5OTg3YSIsImZ1bGxOYW1lIjoiZnVsbE5hbWUiLCJpYXQiOjE2NjA1ODcxNzB9.s05qsvqQWWoLjvhoiA7ve06hdw2aCW5AUAmQ7uAfc2w"

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
) => {
    const data = {
        nameProduct,
        type,
        characteristic,
        stock
    }
    const ress = await api
        .post("/createProduct")
        .set("Content-type", "application/json")
        .set('Authorization', 'Bearer ' + token)
        .send(data)

    return ress
}
const POSTproductFeedback = async (comment) => {
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
module.exports = { POSTsignup, POSTlogin, POSTcreateProduct, POSTproductFeedback }