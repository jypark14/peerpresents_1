var expect = require('chai').expect;
 
var Question = require('../models/Question');
 
describe('Question', function() {
    it('should be invalid if name is empty', function(done) {
        var q = new Question();
 
        q.validate(function(err) {
            expect(err.errors.presentation).to.exist;
            done();
        });

        q.validate(function(err) {
            expect(err.errors.text).to.exist;
            done();
        });

        q.validate(function(err) {
            expect(err.errors.author).to.exist;
            done();
        });

        q.validate(function(err) {
            expect(err.errors.date).to.exist;
            done();
        });
    });
});