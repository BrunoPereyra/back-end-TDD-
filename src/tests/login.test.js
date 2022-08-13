const Users = require("../models/users");
const { POSTlogin, POSTsignup } = require("./helpers");



describe.only("POST - /login TEST", () => {
    test("user login - ok", async () => {
        await POSTsignup("nameUser", "password", "fullName", "Gmail");

        const ress = await POSTlogin("nameUser", "password")
        console.log(ress.body.ress.token);
        expect(ress.body.ress.token).toBeTruthy()
        expect(ress.statusCode).toBe(200)
    })
    test("user login - incorrect password", async () => {
        await POSTsignup("nameUser", "password", "fullName", "Gmail");

        const ress = await POSTlogin("nameUser", "password2")
        expect(ress.body.ress).toBe("user doest not exist or incorrect password")
        expect(ress.statusCode).toBe(401)
    })

    test("user login - user not exist", async () => {
        await Users.deleteMany({})

        const ress = await POSTlogin("nameUserr", "password")
        expect(ress.body.ress).toBe("user doest not exist or incorrect password")
        expect(ress.statusCode).toBe(401)
    })
    
    test.only("user login - user missing password", async () => {
        await POSTsignup("nameUser", "password", "fullName", "Gmail");
        const ress = await POSTlogin("nameUser",2)
        expect(ress.body.ress).toBe("missing password or incorrect data")
        expect(ress.statusCode).toBe(400)
    })
    test("user login - user missing userName", async () => {
        await POSTsignup("nameUser", "password", "fullName", "Gmail");

        const ress = await POSTlogin(2,"aa")
        expect(ress.body.ress).toBe("missing nameUser or incorrect data")
        expect(ress.statusCode).toBe(400)
    })
    test("user login - user missing password and nameUser", async () => {
        await POSTsignup("nameUser", "password", "fullName", "Gmail");

        const ress = await POSTlogin()
        expect(ress.body.ress).toBe("missing nameUser and password")
        expect(ress.statusCode).toBe(400)
    })


})
