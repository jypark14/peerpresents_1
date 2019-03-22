var expect = require('chai').expect;
 
var User = require('../models/User');
 
describe('User', function() {
    it('should be invalid if name is empty', function(done) {
        var u = new User();
 
        m.validate(function(err) {
            expect(err.errors.firstname).to.exist;
            done();
        });
    });
});