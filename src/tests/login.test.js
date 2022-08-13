const { POSTsignup } = require("./helpers");
const { privatekey } = require("../config")
const jsonwebtoken = require("jsonwebtoken")


describe.only("POST - /login TEST", () => {
    test("user login ok", async () => {
        await POSTlogin("nameUser", "password", "fullName", "Gmail");
        // const decodetoken = await jsonwebtoken.verify(ress.body.ress.token, privatekey)
        const ress = await POSTlogin("nameUser", "password")
        expect(ress.body.ress.token).toBe(decodetoken.id)
    })
})
