'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server.js');
const should = chai.should();
 
chai.use(chaiHttp);

describe('Databases', () => {
    describe('GET api/youtubers', () => {
        it('Should GET youtubers', (done) => {
            chai.request(server)
                .get('/api/youtubers')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body[0].should.be.a('object');
                    done();
                });
        });
    });
    describe('GET api/categories', () => {
        it('Should GET categories', (done) => {
            chai.request(server)
                .get('/api/categories')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body[0].should.be.a('object');
                    done();
                });
        });
    });
});
