module.exports.create = function (req, res) {
    res.status(200).json({
        create: true
    })
}

module.exports.update = function (req, res) {
    res.status(200).json({
        update: true
    })
}

module.exports.remove = function (req, res) {
    res.status(200).json({
        remove: true
    })
}

module.exports.getAll = function (req, res) {
    res.status(200).json({
        getAll: true
    })
}

module.exports.getById = function (req, res) {
    res.status(200).json({
        getById: true
    })
}