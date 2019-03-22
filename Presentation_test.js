var expect = require('chai').expect;
 
var Presentation = require('../models/Presentation'),
Response = require('./Response'),
Question = require('./Question'),
Tag = require('./Tag'),
User = require('./User');
 
describe('Presentation', function() {
    it('should be invalid if name is empty', function(done) {
        var p = new Presentation();
 
        p.validate(function(err) {
            expect(err.errors.name).to.exist;
            done();
        });

        p.validate(function(err) {
            expect(err.errors.date).to.exist;
            done();
        });

        p.validate(function(err) {
            expect(err.errors.id).to.exist;
            done();
        });

        p.validate(function(err) {
            expect(err.errors.url).to.exist;
            done();
        });
    });
});