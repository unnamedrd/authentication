const user = require('.../model/user')
const User = require('../model/user')

exports.register = async (req, res, next) => {
    const { username, password } = req.body
    if (password.length < 6) {
        return res.status(400).json({message: 'password less than six characters'})
    }

    try {
        await User.create({
            username, 
            password, 
        }).then(user =>
            res.status(200).json({
                message: "user successfully created", 
                user, 
            })
        )
    }catch(err)
}