var expect = require('chai').expect;
 
var Session = require('../models/Session');
 
describe('Session', function() {
    it('should be invalid if name is empty', function(done) {
        var s = new Session();
 
        s.validate(function(err) {
            expect(err.errors.name).to.exist;
            done();
        });

        s.validate(function(err) {
            expect(err.errors.start_date).to.exist;
            done();
        });

        s.validate(function(err) {
            expect(err.errors.end_date).to.exist;
            done();
        });

        s.validate(function(err) {
            expect(err.errors.id).to.exist;
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