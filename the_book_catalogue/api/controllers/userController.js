const User = require("../models/User");
const Encrypt = require("../encrypt")

const getCookie = (req, res) => {
    res.json(req.session.user || null);
}

const createUser = async (req, res) => {
    try {
        let exists = await User.exists({ email: req.body.email })
        if(exists) {
            res.status(400).json({ error: "The email already exists!" })
            return
        }

        req.body.password = Encrypt.encrypt(req.body.password)
        let user = await User.create(req.body)
        user.password = null
        req.session.user = user
        res.status(200).json({ success: "User created!"})
    } catch(err) {
        res.status(400).json({ error: err })
    }

}

module.exports = {
    createUser,
    getCookie
}