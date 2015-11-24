var assert = require('assert');
var foo = require('../../../src/SoftwareEngineeringProblemsJavaScript');

describe('Test Suite 1', function () {
    it('Test 1', function () {
        assert.ok(true, "This shouldn't fail");
    });
    
    it('Test 2', function () {
        assert.ok(1 === 1, "This shouldn't fail");
        assert.ok(false, "This should fail");
    });
});

describe('Test Suite 2', function () {
    it('Test 3', function () {
        assert.ok(true, "This shouldn't fail");
    });
    
    it('Test 4', function () {
        assert.ok(1 === 1, "This shouldn't fail");
        assert.ok(false, "This should fail");
    });
})