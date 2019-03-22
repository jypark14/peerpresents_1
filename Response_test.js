var expect = require('chai').expect;
 
var Response = require('../models/Response');
 
describe('Response', function() {
    it('should be invalid if name is empty', function(done) {
        var r = new Response();
 
        r.validate(function(err) {
            expect(err.errors.responder).to.exist;
            done();
        });

        r.validate(function(err) {
            expect(err.errors.question).to.exist;
            done();
        });

        r.validate(function(err) {
            expect(err.errors.response).to.exist;
            done();
        });

        r.validate(function(err) {
            expect(err.errors.date).to.exist;
            done();
        });

        r.validate(function(err) {
            expect(err.errors.upvote).to.exist;
            done();
        });

        r.validate(function(err) {
            expect(err.errors.presentation).to.exist;
            done();
        });
    });
});