var expect = require('chai').expect;
 
var Tag = require('../models/Tag');
 
describe('Tag', function() {
    it('should be invalid if name is empty', function(done) {
        var t = new Tag();
 
        t.validate(function(err) {
            expect(err.errors.presentation).to.exist;
            done();
        });

        t.validate(function(err) {
            expect(err.errors.name).to.exist;
            done();
        });

        t.validate(function(err) {
            expect(err.errors.response).to.exist;
            done();
        });

        t.validate(function(err) {
            expect(err.errors.date).to.exist;
            done();
        });
    });
});