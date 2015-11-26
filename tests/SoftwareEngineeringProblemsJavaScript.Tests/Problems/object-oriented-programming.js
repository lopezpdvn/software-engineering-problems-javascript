var assert = require('assert');
var problems = require('../../../src/SoftwareEngineeringProblemsJavaScript');

describe('OOP Tests', function () {
    it('Test Jessie', function () {
        var host0;
        assert.ok(typeof host0 === "undefined");
        var Jessie = problems.oop.Jessie;
        assert.ok(typeof Jessie === "function", "This shouldn't fail");
        host0 = new Jessie("myHostname");
        assert.ok(host0 instanceof Jessie);
        assert.ok(host0 instanceof Object);
        assert.ok(host0.constructor == Jessie);
        assert.ok(!(host0.constructor == Object));
    });
});
