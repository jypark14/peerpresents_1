var expect = require('chai').expect;
 
var Reaction = require('../models/Reaction');
 
describe('Reaction', function() {
    it('should be invalid if name is empty', function(done) {
        var r = new Reaction();
 
        r.validate(function(err) {
            expect(err.errors.id).to.exist;
            done();
        });
    });
});