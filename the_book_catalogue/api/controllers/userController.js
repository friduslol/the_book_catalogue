const User = require("../models/User");

const createUser = async (req, res) => {
    try {
        let exists = await User.exists({ email: req.body.email })
        if(exists) {
            res.status(400).json({ error: "The email already exists!" })
            return
        }
        let user = await User.create(req.body)
        res.status(200).json({ success: "User created!"})
    } catch(err) {
        res.status(400).json({ error: err })
    }

}

module.exports = {
    createUser,
}