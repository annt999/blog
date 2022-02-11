const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');

class AuthController {

    getRegister(req, res, next) {
        res.render('auth/register');
    }

    register(req, res, next) {
        const user = new User({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        user
            .save()
            .then(() => res.json("Successfully"))
            .catch(next);
    }


}

module.exports = new AuthController();