const redisService = require('../services/redis.service');

exports.getAllUser = (req, res, next) => {
	return new Promise((resolve, reject) => {
		redisService.getAll().then(response => {
			resolve(response);
		}).catch(err => {
			reject(err);
		});
	});
};

exports.getUser = (id) => {
	return new Promise((resolve, reject) => {
		redisService.get(id).then(response => {
			if (response) {
				resolve({ send: false });
			}
			else {
				redisService.set(id);
				resolve({ send: true });
			}
		}).catch(err => {
			reject(err);
		});
	});
};

exports.delUser = (id) => {
	return new Promise((resolve, reject) => {
		redisService.del(id).then(response => {
			resolve(response);
		}).catch(err => {
			reject(err);
		});
	});
};