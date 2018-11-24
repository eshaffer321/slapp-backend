const request = require('supertest');
const expect  = require("chai");
const app = require('../app');

describe('GET /user', function() {
    it('respond with json', function(done) {
        request(app)
            .get('/user/smoke')
            .set('Accept', 'application/json')
            // .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                console.log(response.body.length > 0);
                // expect(response.status).(200);
            });
    });
});