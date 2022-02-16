module.exports.login = function (req, res) {
    const {email} = req.body

    res.status(200).json({
        email
    })
}

module.exports.register = function (req, res) {
    res.status(200).json({
        register: true
    })
}