const assert = require('assert');
const cacheController = require('../controllers/cache.controller');
const ID = 'ID-USER-TEST';

describe('Cache', () => {
	it('Deveria retornar true quando a cache não conter o ID', (done) => {
		cacheController.delUser(ID);
		cacheController.getUser(ID).then(res => {
			assert.equal(res.send, true);
			done();
		});
	});

	it('Deveria retornar false quando a cache conter o ID', (done) => {
		cacheController.getUser(ID).then(res => {
			cacheController.getUser(ID).then(res => {
				assert.equal(res.send, false);
				done();
			});
		});
	});

	it('Deveria retornar true quando o ID esteve presente na cache porém não está mais', (done) => {
		cacheController.getUser(ID).then(res => {
			cacheController.delUser(ID);
			cacheController.getUser(ID).then(res => {
				assert.equal(res.send, true);
				done();
			});
		});
	});
});
