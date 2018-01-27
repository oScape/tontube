'use strict';

const expect = require('chai').expect;
const assert = require('assert');
const wrapperDatabase = require('../../lib/wrapperDatabases.js');

describe('#read', function() {
	it('get databases', function () {
		const database = wrapperDatabase.get();

        expect(database).to.be.an('object');
        expect(database).to.have.property('youtubers');
		
	});
    it('get categories', function() {
        const categories = wrapperDatabase.getCategories();

        expect(categories).to.be.an('array');
        expect(categories[0]).to.be.an('object');
    });
});
