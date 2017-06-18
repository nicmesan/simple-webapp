const axios = require('axios');

exports.fetchUsersData = () => {
    return axios.get('https://randomuser.me/api/')
        .then((usersData) => {
            if (usersData.data.results.length === 0) {
                throw new Error('No users found')
            }

            return usersData.data;
        })
};

