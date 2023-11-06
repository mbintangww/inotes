const User = require('../model/usersModel')
const validator = require('validator')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (_id) => {
    //generate token
    const { JWT_SECRET, JWT_EXPIRATION } = process.env
    const token = jwt.sign({ _id }, JWT_SECRET, { expiresIn: `${JWT_EXPIRATION}s` })
    return token
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            throw new Error("Email and password must be filled in")
        }

        const user = await User.findOne({ email })

        if (!user) {
            throw new Error("Your email is not registered")
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            throw new Error("Your password is not valid")
        }
        const token = generateToken(user._id)
        return res.status(200).json({ id: user._id, email: user.email, token })
        //...
    } catch (error) { return res.status(400).json({ error: error.message }) }
}


const signup = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            throw new Error("Email and password must be filled in")
        }

        if (!validator.isEmail(email)) {
            throw new Error("Your email is not valid")
        }

        if (!validator.isStrongPassword(password)) {
            throw new Error("Your password is not strong")
        }
        const isEmailExist = await User.findOne({ email })

        if (isEmailExist) {
            throw new Error("Your email already in use")
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ email, password: hashPassword });

        //create token
        const token = generateToken(newUser._id)


        return res.status(200).json({ token, email: newUser.email });

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

}

module.exports = {
    login,
    signup
}