const mongoose = require("mongoose");
const { server } = require("../index");
const { POSTsignup } = require("./helpers");
const Users = require("../models/users")



describe("POST - signup", () => {
    test("correct data", async () => {
        await Users.deleteMany({})

        const ress = await POSTsignup("nameUser", "password", "fullName", "Gmail");
        const user = await Users.findOne({ nameUser: "nameUser" })

        expect(ress.body.ress.nameUser).toBe(user.nameUser);
        expect(ress.statusCode).toBe(201);
    });

    test("repeat NameUser", async () => {

        const user = await Users.find({ nameUser: "nameUser" })
        const ress = await POSTsignup("nameUser", "password", "fullName", "Gmail");

        expect(user.length).toBe(1);
        expect(ress.body.ress).toBe("userRepeat");
        expect(ress.statusCode).toBe(203);
    })

});


afterAll(() => {
    mongoose.connection.close()
    server.close()
});