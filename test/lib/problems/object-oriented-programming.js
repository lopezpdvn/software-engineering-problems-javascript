const assert = require('assert');
const path = require('path');

// All file-based modules are relative to root of package
const problems = require('../../..');
const Jessie = problems.oop.Jessie;
const Class00 = problems.oop.Class00;
const FunctionConstructorWithThis = problems.oop.FunctionConstructorWithThis;

describe('OOP', () => {
    const host0 = new Jessie("myHostname");

    it('Jessie', () => {
        assert.strictEqual(typeof Jessie, "function");
        assert.ok(host0 instanceof Jessie);
        assert.ok(host0 instanceof Object);
        assert.strictEqual(host0.constructor, Jessie);
        assert.notStrictEqual(host0.constructor, Object);
    });

    it('Object Data Properties', () => {
        // Data property definition
        assert.ok("OSName" in host0);

        // [[Value]]
        assert.strictEqual(host0.OSName, "Debian/Jessie");

        // [[Configurable]] === false
        delete host0.OSName;
        assert.strictEqual(host0.OSName, "Debian/Jessie");

        // [[Writable]] === false
        //host0.OSName = "otherString";
        assert.strictEqual(host0.OSName, "Debian/Jessie");
    });

    it('Object Accesor Properties', () => {
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

    it('Masking prototype properties',  () => {
        const instFWT0 = new FunctionConstructorWithThis();
        const instFWT1 = new FunctionConstructorWithThis();

        assert.strictEqual(instFWT0.protoArray,
                FunctionConstructorWithThis.prototype.protoArray);
        assert.strictEqual(instFWT1.protoArray,
                FunctionConstructorWithThis.prototype.protoArray);
        assert.strictEqual(instFWT0.hasOwnProperty('protoArray'), false);
        assert.strictEqual(instFWT1.hasOwnProperty('protoArray'), false);

        instFWT1.protoArray = ['b', 'a'];
        assert.strictEqual(instFWT0.protoArray,
                FunctionConstructorWithThis.prototype.protoArray);
        assert.notStrictEqual(instFWT1.protoArray,
                FunctionConstructorWithThis.prototype.protoArray);
        assert.strictEqual(instFWT0.hasOwnProperty('protoArray'), false);
        assert.strictEqual(instFWT1.hasOwnProperty('protoArray'), true);
    });

    it('Prototypes and constructors',  () => {
        const instanceClass = new Class00();
        assert.strictEqual(Object.getPrototypeOf(instanceClass),
                Class00.prototype);
    });
});
