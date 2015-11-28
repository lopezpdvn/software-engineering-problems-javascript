var assert = require('assert');
var path = require('path');

// All file-based modules are relative to root of package
var rootPkgPrefix = "..";
var packageJSON = require(path.join(rootPkgPrefix, 'package'));
var problems = require(path.join(rootPkgPrefix,
    packageJSON.dependencies["software-engineering-problems"]
    .replace(/^file:/, "")));
var Jessie = problems.oop.Jessie;

describe('OOP', function () {
    var host0 = new Jessie("myHostname");

    it('Jessie', function () {
        assert.strictEqual(typeof Jessie, "function");
        assert.ok(host0 instanceof Jessie);
        assert.ok(host0 instanceof Object);
        assert.strictEqual(host0.constructor, Jessie);
        assert.notStrictEqual(host0.constructor, Object);
    });

    it('Object Data Properties', function () {    
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

    it('Object Accesor Properties', function () {        
        // Accesor property definition
        assert.ok("runLevel" in host0);
        
        // [[Get]]
        assert.strictEqual(host0.runLevel, 4);
        
        // [[Configurable]] === false
        delete host0.runLevel;
        assert.strictEqual(host0.runLevel, 4);
        
        // [[Set]]
        host0.runLevel = -1;
        assert.strictEqual(host0.runLevel, 0);
        host0.runLevel = 2;
        assert.strictEqual(host0.runLevel, 2);
        host0.runLevel = 7;
        assert.strictEqual(host0.runLevel, 6);
    });
});
