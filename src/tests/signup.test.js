const { server } = require("../index")
const mongoose = require("mongoose")
const { POSTsignup } = require("./helpers")



afterAll(() => {
    server.close()
    mongoose.connection.close()
})

describe("POST - signup", () => {

    test('correct data', async () => {

        const { ress } = await POSTsignup(
            "nameUser",
            "password",
            "fullName",
            "Gmail"
        )
        console.log(ress);
        expect(ress.body.ress).toBe("nameUser")
        expect(ress.body.statusCode).toBe(202)

    })
})