const redis = require('../services/redis.service');

exports.getAllUser = (req, res, next) => {
	redis.getAll().then(response => {
		res.send(response);
	}).catch(err => {
		res.send(err);
	});
};

exports.getUser = (req, res, next) => {
	redis.get(req.params.id).then(response => {
		if (response) {
			res.send({
				send: false
			});
		}
		else {
			redis.set(id);
			res.send({
				send: true
			});
		}
	}).catch(err => {
		res.send(err);
	});
};