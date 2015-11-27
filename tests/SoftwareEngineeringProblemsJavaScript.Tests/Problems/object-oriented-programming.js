var assert = require('assert');
var problems = require('../../../src/SoftwareEngineeringProblemsJavaScript');
var Jessie = problems.oop.Jessie;

describe('OOP Tests', function () {
    it('Test Jessie', function () {
        var host0;
        assert.strictEqual(typeof host0, "undefined");
        assert.strictEqual(typeof Jessie, "function", "This shouldn't fail");
        host0 = new Jessie("myHostname");
        assert.ok(host0 instanceof Jessie);
        assert.ok(host0 instanceof Object);
        assert.strictEqual(host0.constructor, Jessie);
        assert.notStrictEqual(host0.constructor, Object);
    });

    it('Test Object Data Properties', function () {
        var host0 = new Jessie("myHostName");
        
        // Data property definition
        assert.ok("OSName" in host0);
        
        // [[Value]]
        assert.strictEqual(host0.OSName, "Debian/Jessie");
        
        // [[Configurable]] === false
        delete host0.OSName;
        assert.strictEqual(host0.OSName, "Debian/Jessie");

        // [[Writable]] === false
        host0.OSName = "otherString";
        assert.strictEqual(host0.OSName, "Debian/Jessie");
    });
});
