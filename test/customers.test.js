const assert = require('assert');
const customersController = require('../controllers/customers.controller');
const ID = 'ID-USER-TEST';

describe('Customers', () => {
	it('Deveria retornar true quando a cache não conter o ID', (done) => {
		customersController.delUser(ID);
		customersController.getUser(ID).then(res => {
			assert.equal(res.send, true);
			done();
		});
	});

	it('Deveria retornar false quando a cache conter o ID', (done) => {
		customersController.getUser(ID).then(res => {
			customersController.getUser(ID).then(res => {
				assert.equal(res.send, false);
				done();
			});
		});
	});

	it('Deveria retornar true quando o ID esteve presente na cache porém não está mais', (done) => {
		customersController.getUser(ID).then(res => {
			customersController.delUser(ID);
			customersController.getUser(ID).then(res => {
				assert.equal(res.send, true);
				done();
			});
		});
	});
});
