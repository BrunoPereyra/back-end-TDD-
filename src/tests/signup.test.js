const mongoose = require("mongoose");
const { server } = require("../index");
const { POSTsignup } = require("./helpers");
const Users = require("../models/users")


describe("POST - /signup TEST", () => {
    test("correct data", async () => {
        await Users.deleteMany({})

        const ress = await POSTsignup("nameUserb", "password", "fullName", "Gmail");
        const user = await Users.findOne({ nameUser: "nameUserb" })


        expect(ress.body.ress.nameUser).toBe(user.nameUser);
        expect(ress.statusCode).toBe(201);
    });
    test.only("repeat NameUser", async () => {
        const user = await Users.find({ nameUser: "nameUserb" })
        const ress = await POSTsignup("nameUserb", "password", "fullName", "Gmail");

        expect(user.length).toBe(1);
        expect(ress.body.ress).toBe("userRepeat");
        expect(ress.statusCode).toBe(203);
    })
    test("malformed data or missing", async () => {
        const ress = await POSTsignup("a", "passwaaaord", "fullNaaaame", "Gmail");
        expect(ress.body.ress == "malformed data or missing" || "name user > 5").toBeTruthy()
        expect(ress.statusCode).toBe(400)
    })

});


afterAll(() => {
    mongoose.connection.close()
    server.close()
});