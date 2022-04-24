const User = require("../models/User");

const createUser = async (req, res) => {
    try {
        let exists = await User.exists({ email: req.body.email })
        if(exists) {
            res.status(400).json({ email: req.body.email })
        }
    } catch(err) {

    }

}

module.exports = {
    createUser,
}