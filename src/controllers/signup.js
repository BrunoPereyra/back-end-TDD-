const signup = (req, ress) => {
   ress.status(2002).json({
    ress:"nameUser"
   })
}
module.exports = signup