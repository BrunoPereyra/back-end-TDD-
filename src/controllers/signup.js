const Users = require("../models/users");
const bcrypt = require("bcrypt");
const signup = async (req, ress) => {
   const { nameUser, password, fullName, Gmail } = req.body;
   
   if (
      typeof (nameUser) !== "string" ||
      typeof (password) !== "string" ||
      typeof (fullName) !== "string" ||
      typeof (Gmail) !== "string"
   ) {
      ress.status(400).json({
         ress: "malformed data or missing"
      })
   } else if (nameUser.length < 5) {
      ress.status(400).json({
         ress: "name user > 5"
      })
   }
   const passwordHash = await bcrypt.hash(password, 10);
   const user = await new Users({
      nameUser,
      passwordHash,
      fullName,
      Gmail,
   });
   const userRepeat = await Users.findOne({ nameUser: nameUser });
   if (userRepeat) {
      ress.status(203).json({
         ress: "userRepeat",
      });
   } else {
      const userSave = await user.save();
      ress.status(201).json({
         ress: userSave,
      });
   }
};
module.exports = signup;
