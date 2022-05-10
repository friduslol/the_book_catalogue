const User = require("../models/User")
const Favourites = require("../models/Favourites")
const HaveRead = require("../models/HaveRead")
const WillRead = require("../models/WillRead")
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

const logout = async (req, res) => {
    try {
        if(req.session.user) {
            delete req.session.user
            return res.status(200).json({ success: "Logout successfull!" })
        }
    } catch(err) {
        res.status(400).json({ error: err })
    }
}

const login = async (req, res) => {
    try {
        let exists = await User.exists({ email: req.body.email })
        if(exists) {
            let user = await User.findOne({ email: req.body.email }).exec()
            if(user.password === Encrypt.encrypt(req.body.password)) {
                user.password = null
                req.session.user = user
                return res.status(200).json({ success: "Login successfull!" })
            }
        }
        return res.status(401).json({ error: "Bad credentials!" })
    } catch(err) {
        res.status(400).json({ error: err })
    }
}

const addToLibrary = async (req, res) => {
    try {
        if(req.body.option === 1) {
            let exists = await Favourites.exists({ userId: req.body.userId })
            if(exists) {
                let book = await Favourites.exists(
                    { books: { $in: [req.body.id] }}).exec()
                if(book) {
                    res.status(400).json({ error: "The book already exists in Favourites!" })
                    return
                } else {
                    Favourites.updateOne(
                        { userId: req.body.userId },
                        { $addToSet: { books: req.body.id }}).exec()
                        res.status(200).json({ success: "Book added to Favourites!"})
                    return
                }
            } else {
                Favourites.create({
                    userId: req.body.userId,
                    books: req.body.id,
                })
                res.status(200).json({ success: "Book added to Favourites!"})
                return
            }
        }

        if(req.body.option === 2) {
            let exists = await WillRead.exists({ userId: req.body.userId })

            if(exists) {
                let book = await WillRead.exists(
                    { books: { $in: [req.body.id] }}).exec()
                if(book) {
                    res.status(400).json({ error: "The book already exists in Will Read!" })
                    return
                } else {
                    WillRead.updateOne(
                        { userId: req.body.userId },
                        { $addToSet: { books: req.body.id }}).exec()
                        res.status(200).json({ success: "Book added to Will Read!"})
                    return
                }
            } else {
                WillRead.create({
                    userId: req.body.userId,
                    books: req.body.id,
                })
                res.status(200).json({ success: "Book added to Will Read!"})
                return
            }
        }

        if(req.body.option === 3) {
            let exists = await HaveRead.exists({ userId: req.body.userId })

            if(exists) {
                let book = await HaveRead.exists(
                    { books: { $in: [req.body.id] }}).exec()
                if(book) {
                    res.status(400).json({ error: "The book already exists in Have Read!" })
                    return
                } else {
                    HaveRead.updateOne(
                        { userId: req.body.userId },
                        { $addToSet: { books: req.body.id }}).exec()
                        res.status(200).json({ success: "Book added to Have Read!"})
                    return
                }
            } else {
                HaveRead.create({
                    userId: req.body.userId,
                    books: req.body.id,
                })
                res.status(200).json({ success: "Book added to Have Read!"})
                return
            }
        }

    } catch (err) {
        res.status(400).json({ error: err })
    }
}

module.exports = {
    createUser,
    getCookie,
    logout,
    login,
    addToLibrary
}