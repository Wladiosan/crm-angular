module.exports.create = function (req, res) {
    res.status(200).json({
        getById: true
    })
}

module.exports.getAll = function (req, res) {
    res.status(200).json({
        getAll: true
    })
}