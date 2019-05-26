const redis = require('redis');
const client = redis.createClient();
const TIME = 60;

exports.set = (id) => {
    return new Promise((resolve, reject) => {
        client.set(id, true, 'EX', TIME, (err, reply) => {
            if (err) reject(err);
            resolve(reply);
        });
    });
}

exports.get = (id) => {
    return new Promise((resolve, reject) => {
        client.get(id, (err, reply) => {
            if (err) reject(err);
            resolve(reply);
        });
    });
}

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        client.keys('*', (err, keys) => {
            if (err) reject(err);
            resolve(keys);
        });
    });
}


