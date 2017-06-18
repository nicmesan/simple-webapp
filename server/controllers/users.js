const fetchUsersData = require('../services/users').fetchUsersData;

exports.fetchData = function (req, res, next) {
    return fetchUsersData()
        .then((usersData) => {
            res.status(200).json(usersData)
        })
        .catch(function (err) {
            next(err)
        })
};