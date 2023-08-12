const User = require('../model/usersModel')
require('dotenv').config()

const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    const authorization = req.header('Authorization');

    if (!authorization) {
        return res.status(401).json({ message: "Token does not exist. Authorization failed" });
    }

    // Extract the token from the "Authorization" header
    const token = authorization.split(' ')[1];

    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById({ _id }).select('_id')


        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ message: "Token verification failed. Authorization failed" });
    }
};
module.exports = auth;